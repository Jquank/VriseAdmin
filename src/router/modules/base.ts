import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/Login',
        name: 'Login',
        meta: { title: '登录' },
        component: () => import('views/login/Login.vue')
    },
    {
        path: '/',
        name: 'Layout',
        meta: { title: 'Layout' },
        redirect: '/Home',
        component: () => import('@/layout/Layout.vue'),
        children: [
            {
                path: '/Home',
                name: 'Home',
                // deep为菜单层级，可用于处理el-menu递归菜单的样式
                meta: { title: '首页', icon: 'setting', deep: 1 },
                component: () => import('views/home/Home.vue')
            }
        ]
    }
]
export default routes
