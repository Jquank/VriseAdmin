<template>
    <router-view />
</template>
<script lang="ts" setup>
    import { provide } from 'vue'
    import { useStore } from '@/store/index'
    const store = useStore()
    provide('store', store)
</script>
