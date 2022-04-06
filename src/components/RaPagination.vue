<template>
    <el-pagination
        v-model:currentPage="page.currentPage"
        v-model:page-size="page.pageSize"
        :page-sizes="[10, 20, 50, 100]"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
        @size-change="sizeChange"
        @current-change="currentChange"
        v-bind="$attrs"
    />
</template>

<script setup lang="ts">
    import { ref, reactive } from 'vue'
    type Callback = (arg?: any) => Promise<number>
    const props = defineProps<{
        callback: Callback
    }>()
    const page = reactive({
        currentPage: 1,
        pageSize: 10
    })
    const total = ref(0)
    const sizeChange = () => {
        props.callback()
    }
    const currentChange = () => {
        props.callback()
    }
    props.callback().then((totalNum: number) => {
        total.value = totalNum
    })
</script>

<style lang="less" scoped>
    .el-pagination {
        display: flex;
        justify-content: flex-end;
    }
</style>
