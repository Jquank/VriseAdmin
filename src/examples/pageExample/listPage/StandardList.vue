<template>
    <div class="standrad-list">
        <CollapseWrapper>
            <el-form ref="elForm1" v-show="showElForm" :model="searchModel" :inline="true" label-width="100px">
                <el-form-item label="地块名称">
                    <el-input v-model="searchModel.value1" />
                </el-form-item>
                <el-form-item label="所属">
                    <el-input v-model="searchModel.value1" />
                </el-form-item>
                <el-form-item label="分组1">
                    <el-input v-model="searchModel.value1" />
                </el-form-item>
                <el-form-item label="分组2">
                    <el-input v-model="searchModel.value1" />
                </el-form-item>
                <el-form-item label="分组3">
                    <el-input v-model="searchModel.value1" />
                </el-form-item>
                <el-form-item label="分组4">
                    <el-input v-model="searchModel.value1" />
                </el-form-item>
                <!-- <el-form-item>
                        <div>
                            <el-button>重置</el-button>
                            <el-button type="primary" @click="listSerach">查询</el-button>
                        </div>
                    </el-form-item> -->
                <el-form-item class="collapse-item">
                    <el-button type="text"
                        >收起 <el-icon><ArrowDown /></el-icon
                    ></el-button>
                </el-form-item>
            </el-form>
        </CollapseWrapper>

        <div class="role-manage">
            <el-table stripe border :data="tableData">
                <el-table-column type="index" label="序号" width="60" align="center" />
                <el-table-column prop="id" label="ID" min-width="80" align="center" />
                <el-table-column prop="name" label="名称" min-width="120" align="center" />
                <el-table-column prop="state" label="状态" min-width="80" align="center">
                    <template #default="scope">
                        <span>{{ scope.row.state === true ? '在线' : '忙碌' }}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="time" label="创建时间" width="170" align="center" />
                <el-table-column prop="note" label="备注" min-width="150" align="center" />
                <el-table-column label="操作" width="100" align="center">
                    <template #default>
                        <el-button type="text" plain @click="edit">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <RaPagination :callback="listSerach" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue'
    import { useRouter } from 'vue-router'
    import CollapseWrapper from 'components/CollapseWrapper.vue'
    import type { TableDataType } from './type'
    import { getStandardList } from '@/api/modules/listPage/standardList'
    import RaPagination from '@/components/RaPagination.vue'
    const router = useRouter()
    let tableData = ref<TableDataType[]>([])
    const searchModel = reactive({
        value1: ''
    })
    const listSerach = (pageParams?: Record<string, any>) => {
        let params = Object.assign({}, pageParams, searchModel)
        return getStandardList(params).then((res) => {
            tableData.value = res.data
            return 100
        })
    }
    const elForm1 = ref()
    const showElForm = ref(true)
    const edit = () => {
        router.replace({ path: '/DetailForm' })
    }
</script>

<style lang="less">
    .collapse-item {
        .el-form-item__content {
            justify-content: flex-end;
            align-items: flex-start;
        }
    }
</style>
<style lang="less" scoped>
    .standrad-list {
        .el-form {
            display: flex;
            flex-wrap: wrap;
            height: 100%;
            overflow: hidden;
            .collapse-item {
                flex: 1;
                margin-bottom: 0;
                position: relative;
            }
        }
    }
</style>
