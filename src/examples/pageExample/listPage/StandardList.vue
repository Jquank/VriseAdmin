<template>
    <div>
        <SearchBar>
            <div class="search-box">
                <el-form :model="searchModel" :inline="true">
                    <el-form-item label="111">
                        <el-input v-model="searchModel.value1" />
                    </el-form-item>
                    <el-form-item label="222">
                        <el-input v-model="searchModel.value2" />
                    </el-form-item>
                    <el-form-item label="333">
                        <el-input v-model="searchModel.value3" />
                    </el-form-item>
                </el-form>
                <div>
                    <el-button>重置</el-button>
                    <el-button type="primary" @click="listSerach">查询</el-button>
                </div>
            </div>
        </SearchBar>
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
                        <el-button type="primary">123</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <RaPagination :callback="listSerach" />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue'
    import SearchBar from 'components/SearchBar.vue'
    import type { TableDataType } from './type'
    import { getStandardList } from '@/api/modules/listPage/standardList'
    import RaPagination from '@/components/RaPagination.vue'
    let tableData = ref<TableDataType[]>([])
    const searchModel = reactive({
        value1: '',
        value2: '',
        value3: ''
    })
    const listSerach = (pageParams?: Record<string, any>) => {
        let params = Object.assign({}, pageParams, searchModel)
        return getStandardList(params).then((res) => {
            tableData.value = res.data
            return 100
        })
    }
</script>

<style lang="less" scoped>
    .role-manage {
        // padding: 10px 0;
    }
</style>
