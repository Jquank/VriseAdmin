<template>
    <SearchBar title="444555">
        <div class="search-box">
            <el-input :modelValue="112" />
            <el-input :modelValue="112" />
            <el-input :modelValue="112" />
            <el-input :modelValue="112" />
            <el-input :modelValue="112" />
        </div>
    </SearchBar>
    <div class="role-manage">
        <el-table stripe border :data="tableData" style="width: 100%">
            <el-table-column type="index" label="序号" width="60" align="center" />
            <el-table-column prop="roleName" label="角色名称" align="center" />
            <el-table-column prop="state" label="状态" align="center">
                <template #default="scope">
                    <el-switch
                        :width="60"
                        v-model="scope.row.state"
                        inline-prompt
                        active-text="启用"
                        inactive-text="禁用"
                    />
                </template>
            </el-table-column>
            <el-table-column prop="startTime" label="创建时间" width="170" align="center" />
            <el-table-column prop="notes" label="备注" min-width="200" align="center" />
            <el-table-column label="操作" width="100" align="center">
                <template #default>
                    <el-button type="primary">123</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import $http from '@/utils/http'
    import SearchBar from 'components/SearchBar.vue'
    let tableData = ref([])
    $http.get('/role/list').then((res) => {
        tableData.value = res.data
    })
</script>

<style lang="less" scoped>
    .role-manage {
    }
</style>
