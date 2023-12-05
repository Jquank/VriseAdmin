<template>
    <div class="login-wrapper">
        <div class="login">
            <el-select v-model="username">
                <el-option label="admin" value="admin"></el-option>
                <el-option label="user" value="user"></el-option>
            </el-select>
            <el-input v-model="passward"></el-input>
            <el-button @click="login" type="primary">登录</el-button>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import type { UserInfo } from '@/types/modules/login'
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    import { getToken, getUserInfo } from '@/api/modules/login'
    const router = useRouter()
    const username = ref('admin')
    const passward = ref('')
    let userInfo: UserInfo
    const login = async () => {
        let token = await getToken()
        sessionStorage.setItem('token', token)
        const params = {
            username: username.value,
            passward: passward.value
        }
        getUserInfo(params).then((res) => {
            userInfo = res
            sessionStorage.setItem('userInfo', JSON.stringify(userInfo))
        })
        router.replace({ path: '/Home' })
    }
</script>

<style lang="less" scoped>
    .login-wrapper {
        width: 100%;
        height: 100%;
        background-color: var(--el-color-primary-light-3);
        position: relative;
        .login {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 300px;
            height: 150px;
            background-color: #fff;
            border-radius: 2px;
            margin: auto;
            padding: 20px;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }
    }
</style>
