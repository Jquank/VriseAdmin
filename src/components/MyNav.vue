<template>
    <el-scrollbar>
        <el-menu
            style="--el-menu-text-color: var(--nav-text-color); --el-menu-hover-text-color: var(--nav-hover-color)"
            :unique-opened="true"
            class="menu-box-el"
            router
            :mode="props.mode"
            :default-active="$route.path"
            :collapse="isCollapse"
        >
            <MenuTree :menuData="menuData"></MenuTree>
        </el-menu>
    </el-scrollbar>
</template>

<script setup lang="ts">
    import type { NavMode } from './type'
    import { useRouter } from 'vue-router'
    import { ref, computed } from 'vue'
    import { useStore } from '@/store/index'
    import MenuTree from './MenuTree.vue'
    const store = useStore()
    const props = defineProps<{
        mode: NavMode
    }>()
    const router = useRouter().options.routes
    const menuData = router.filter((v) => v.name === 'Layout')[0].children || []
    const isCollapse = computed(() => {
        return store.state.collapse
    })
</script>

<style lang="less"></style>
