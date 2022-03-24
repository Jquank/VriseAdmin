<template>
    <template v-for="item in menuData" :key="item.name">
        <el-sub-menu
            v-if="item.children"
            :index="item.path"
            popper-class="self-el-popper"
            :class="'el-sub-menu-deep' + item.meta.deep"
        >
            <template #title>
                <el-icon v-if="item.meta.icon" :size="16">
                    <component :is="item.meta.icon"></component>
                </el-icon>
                <span>{{ item.meta.title }}</span>
            </template>
            <MenuTree :menuData="item.children" v-if="item.children && item.children.length"></MenuTree>
        </el-sub-menu>
        <el-menu-item v-else :index="item.path" :class="'el-menu-item-deep' + item.meta.deep">
            <el-icon v-if="item.meta.icon" :size="16">
                <component :is="item.meta.icon"></component>
            </el-icon>
            <span>{{ item.meta.title }}</span>
        </el-menu-item>
    </template>
</template>

<script setup lang="ts">
    import { toRefs } from 'vue'
    const props = defineProps(['menuData'])
    const { menuData } = toRefs(props)
</script>
