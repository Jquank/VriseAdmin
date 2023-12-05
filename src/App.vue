<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>

<script lang="ts" setup>
    import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
    import { ref } from 'vue'

    const locale = ref(zhCn)
</script>
