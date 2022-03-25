<template>
    <header class="header">
        <div class="header-left">
            <div @click="expandMenu" class="header-handle-box">
                <el-icon :size="18">
                    <expand />
                </el-icon>
            </div>
            <div class="bread-nav">
                <div v-for="(item, index) in currentRouteMatched" :key="item.name || item.path" class="bread-nav-item">
                    <div>{{ item.meta.title }}</div>
                    <div class="separator" v-if="index !== currentRouteMatched.length - 1">></div>
                </div>
            </div>
        </div>
        <div class="header-right">
            <div @click="settingTheme" class="header-handle-box">
                <el-icon :size="18">
                    <setting />
                </el-icon>
            </div>
        </div>
    </header>
</template>

<script setup lang="ts">
    import { useStore } from '@/store/index'
    import { computed } from 'vue'
    import { useRouter } from 'vue-router'

    const store = useStore()
    const expandMenu = () => {
        store.commit('changeCollapse')
    }
    const settingTheme = () => {
        const htl = document.documentElement
        htl.setAttribute('theme-dark', '')
    }
    const currentRouteMatched = computed(() => {
        return useRouter().currentRoute.value.matched.filter((v) => v.name !== 'Layout')
    })
</script>

<style lang="less" scoped>
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        text-align: center;
        border-bottom: 1px solid #eee;
        box-sizing: border-box;
        color: var(--header-text-color);
        background-color: var(--header-bg-color);
        .header-handle-box {
            display: flex;
            align-items: center;
            cursor: pointer;
            height: 100%;
            padding: 0 10px 0 8px;
            &:hover {
                background-color: var(--header-hover-color);
            }
        }
        .header-left {
            display: flex;
            align-items: center;
            height: 100%;
            .bread-nav {
                display: flex;
                align-items: center;
            }
            .bread-nav-item {
                display: flex;
                align-items: center;
            }
            .separator {
                padding: 0 5px;
            }
        }
        .header-right {
            height: 100%;
        }
    }
</style>
