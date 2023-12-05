<template>
    <div>
        <el-row :gutter="50">
            <el-col :span="12">
                <draggable class="list-group1" :list="list1" group="people" @change="log" itemKey="name">
                    <template #item="{ element, index }">
                        <div class="list-group-item">{{ element.name }} {{ index }}</div>
                    </template>
                </draggable>
            </el-col>
            <el-col :span="12">
                <draggable class="list-group2" :list="list2" group="people" @change="log" itemKey="name">
                    <template #item="{ element, index }">
                        <div class="list-group-item">{{ element.name }} {{ index }}</div>
                    </template>
                </draggable>
            </el-col>
        </el-row>
        <el-row :gutter="50">
            <el-col :span="12">{{ list1 }}</el-col>
            <el-col :span="12">{{ list2 }}</el-col>
        </el-row>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import draggable from 'vuedraggable'
    import { aaa } from '@/types/common'
    setTimeout(() => {
        aaa.value = true
    }, 5000)

    const list1 = ref([
        { name: 'A', id: 1 },
        { name: 'B', id: 2 },
        { name: 'C', id: 3 },
        { name: 'D', id: 4 }
    ])
    const list2 = ref([])
    const log = (evt: any) => {
        console.log(evt)
    }
</script>

<style lang="less" scoped>
    .list-group-item {
        height: 50px;
        background-color: red;
        line-height: 50px;
        border-bottom: 1px solid #eee;
    }
    .list-group2 {
        width: 100%;
        height: 200px;
        background-color: rgb(143, 136, 136);
    }
</style>
