<template>
    <div class="layout">
        <div class="layout-left">
            <div class="logo">
                <img class="logo-img" src="../assets/logo.png" alt="logo" />
                <transition name="logotext">
                    <span v-show="showLogoText" class="logo-text">VriseAdmin</span>
                </transition>
            </div>
            <MyNav :mode="navMode"></MyNav>
        </div>
        <div class="layout-right">
            <MyHeader></MyHeader>
            <section class="main-box">
                <el-scrollbar>
                    <router-view #default="{ Component }">
                        <transition name="section" appear>
                            <component :is="Component"></component>
                        </transition>
                    </router-view>
                </el-scrollbar>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    import type { NavMode } from '@/types/common'
    import { ref, computed } from 'vue'
    import { useStore } from '@/store/index'
    import MyHeader from './MyHeader.vue'
    import MyNav from './MyNav.vue'
    const store = useStore()
    const navMode = ref<NavMode>('vertical')
    const showLogoText = computed(() => {
        return !store.state.collapse
    })
</script>

<style lang="less" scoped>
    .layout {
        display: flex;
        height: 100%;
        width: 100%;
        .layout-left {
            display: flex;
            flex-direction: column;
            height: 100%;
            background-color: var(--nav-bg-color);
            .logo {
                display: flex;
                justify-content: center;
                align-items: center;
                height: var(--nav-item-height);
                font-size: 18px;
                font-weight: bold;
                color: var(--nav-hover-color);
                overflow: hidden;
                .logo-img {
                    width: 20px;
                }
                .logo-text {
                    padding-left: 10px;
                }
                .logotext-enter-active,
                .logotext-leave-active {
                    transition: all 0.5s cubic-bezier(0.32, 0, 1, 0);
                }
                .logotext-enter-from,
                .logotext-leave-to {
                    transform: translateX(20px);
                    width: 0;
                    opacity: 0;
                }
            }
            .el-scrollbar {
                flex: 1;
            }
        }
        .layout-right {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            .main-box {
                position: relative;
                flex: 1;
                width: 100%;
                overflow: hidden;
                background-color: var(--main-box-bg-color);
                & > .el-scrollbar {
                    background-color: var(--main-box-bg-color);
                    padding: 10px;
                    position: absolute;
                    width: 100%;
                    box-sizing: border-box;
                }
            }
        }
    }

    .section-enter-active,
    .section-leave-active {
        transition: all 0.7s ease-in-out;
    }

    .section-enter-from,
    .section-leave-to {
        opacity: 0;
        transform: translateX(-20px);
    }
</style>
