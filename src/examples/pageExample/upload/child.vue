<template>
    <div>
        <h1>{{ aa }}</h1>
        <el-input v-model="cc.a"></el-input>
    </div>
</template>

<script setup lang="ts">
    import { ref, computed, watch } from 'vue'
    const props = defineProps({
        modelValue: {
            type: Object,
            default() {
                return {}
            }
        }
    })
    const cc = computed(() => {
        return props.modelValue
    })
    watch(
        () => props.modelValue,
        (val) => {
            console.log(val)
        }
    )
    const aa = ref(1)
</script>

<style lang="less" scoped></style>
