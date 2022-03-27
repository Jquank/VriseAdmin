<template>
    <div class="search-bar">
        <div :class="props.title || $slots.title ? 'title' : ''">
            <span v-if="props.title && !$slots.title">{{ props.title }}</span>
            <template v-else>
                <slot name="title"></slot>
            </template>
            <div v-if="props.title || $slots.title" @click="arrowClick" class="arrow-down">
                <el-icon>
                    <ArrowDown size="16" />
                </el-icon>
            </div>
        </div>
        <div ref="defaultSlot" class="default-slot-box">
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { addClass, removeClass } from '@/utils'
    import { ref } from 'vue'

    const props = defineProps({
        title: {
            type: String,
            default: ''
        },
        minHeight: {
            type: String,
            default: '40px'
        }
    })
    const defaultSlot = ref<HTMLElement>()
    const arrowClick = () => {
        const el = defaultSlot.value as HTMLElement
        const height = el.clientHeight
        if (height > 0) {
            addClass(el, 'default-slot-hidden')
        } else {
            removeClass(el, 'default-slot-hidden')
        }
    }
</script>

<style lang="less" scoped>
    .search-bar {
        background-color: var(--section-bg-color);
        margin-bottom: 10px;
        .default-slot-box {
            transition: all 2s;
            min-height: 0;
        }
        .default-slot-hidden {
            height: 0;
            overflow: hidden;
        }
    }
    .title {
        position: relative;
        font-size: 16px;
        min-height: v-bind('props.minHeight');
        border-bottom: 1px solid var(--default-border-color);
        padding: 0 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .arrow-down {
            position: absolute;
            right: 20px;
            top: 50%;
            transform: translateY(-50%);
            padding: 8px;
            cursor: pointer;
        }
    }
    :slotted(.search-box) {
        display: flex;
        padding: 10px;
        & > * {
            width: 300px;
            margin-right: 20px;
        }
    }
</style>
