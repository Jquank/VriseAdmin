<template>
    <div @click="save">1222</div>
</template>

<script setup lang="ts">
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const save = () => {
        setTimeout(() => {
            router.push({ path: '/StandardList' })
        }, 2000)
    }
</script>

<style lang="less" scoped></style>
