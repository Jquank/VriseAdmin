<template>
    <div class="login">
        <el-select v-model="username">
            <el-option label="admin" value="admin"></el-option>
            <el-option label="user" value="user"></el-option>
        </el-select>
        <el-input v-model="passward"></el-input>
        <el-button @click="login" type="primary">登录</el-button>
    </div>
</template>

<script lang="ts" setup>
    import type { UserInfo } from './type'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter()
    const username = ref('admin')
    const passward = ref('')
    let userInfo: UserInfo
    const login = () => {
        let menuAuth = username.value === 'admin' ? ['Home1', 'Home4', 'RoleManage222', 'RoleManage111'] : ['Home3']
        userInfo = {
            username: username.value,
            token: '12345',
            roles: menuAuth
        }
        sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        // sessionStorage.setItem('againAddRoutes', '1')
        router.push('/Home')
    }
</script>

<style lang="less" scoped>
    .login {
        width: 300px;
        height: 150px;
        margin: auto;
        padding: 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
    }
</style>
