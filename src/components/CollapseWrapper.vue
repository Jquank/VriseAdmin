<template>
    <div class="collapse-wrapper" @click="collapse" ref="collapseWrapper">
        <slot> </slot>
    </div>
</template>

<script setup lang="ts">
    import { ref, useSlots } from 'vue'
    const slots = useSlots()
    console.log(slots.default)

    const collapse = (e: MouseEvent) => {
        const el = collapseWrapper.value as HTMLElement
        console.log(el.clientHeight)
        if (el.clientHeight > 75) {
            const els = el.getElementsByClassName('el-form')[0]
            console.log(els.children)
        }
    }
    const collapseWrapper = ref()
</script>

<style lang="less" scoped>
    .collapse-wrapper {
        background-color: var(--section-bg-color);
    }
</style>
