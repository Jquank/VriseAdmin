<template>
    <div>
        <child :model-value="data"></child>
        <h4>{{ data }}</h4>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import child from './child.vue'
    const data = ref({ a: 1 })
</script>

<style lang="less" scoped></style>
