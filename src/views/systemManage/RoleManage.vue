<template>
    <div class="role-manage">
        <div @click="handleClick">456</div>
        <el-table :data="tableData">
            <el-table-column></el-table-column>
        </el-table>
    </div>
</template>

<script setup lang="ts">
    import { reactive } from 'vue'
    const tableData = reactive([])
    const body = document.documentElement
    const handleClick = () => {
        console.log(123)

        // body.style.setProperty('--nav-bg-color', 'blue')
        body.setAttribute('style', '--nav-bg-color: blue')
    }
</script>

<style lang="less" scoped></style>
