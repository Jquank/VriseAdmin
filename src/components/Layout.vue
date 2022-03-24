<template>
    <div class="layout">
        <div class="layout-left">
            <MyNav :mode="navMode"></MyNav>
        </div>
        <div class="layout-right">
            <MyHeader></MyHeader>
            <main>
                <router-view></router-view>
            </main>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { NavMode } from './type'
    import { ref } from 'vue'
    import MyHeader from './MyHeader.vue'
    import MyNav from './MyNav.vue'

    const navMode = ref<NavMode>('vertical')
</script>

<style lang="less" scoped>
    .layout {
        display: flex;
        height: 100%;
        .layout-left {
            // width: 200px;
            height: 100%;
            background-color: var(--nav-bg-color);
        }
        .layout-right {
            flex: 1;
            height: 100%;
        }
    }
</style>
