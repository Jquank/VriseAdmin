<template>
    <div class="menu-auth">
        <p>权限由角色控制，用户登录成功即获得对应的角色数组</p>
        <el-radio-group
            style="width: 100%; margin-top: 20px; display: flex; justify-content: center"
            v-model="auth"
            @change="radioChange"
        >
            <el-radio label="admin"></el-radio>
            <el-radio label="user"></el-radio>
        </el-radio-group>
        <el-alert title="切换角色，控制菜单 权限测试页1 的显示隐藏" type="success" />
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { getUserInfo } from '@/api/model/login'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const username = JSON.parse(sessionStorage.getItem('userInfo') || '{}').username as string
    const auth = ref(username)
    const radioChange = (value: any) => {
        getUserInfo({ username: value }).then((res) => {
            sessionStorage.setItem('userInfo', JSON.stringify(res))
            router.go(0)
        })
    }
</script>

<style lang="less" scoped>
    .menu-auth {
        padding: 10px;
        font-size: 16px;
        background: var(--section-bg-color);
        height: 100px;
        text-align: center;
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
    }
</style>
