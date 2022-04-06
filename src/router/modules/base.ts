import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/Home',
        name: 'Home',
        // deep为菜单层级，可用于处理el-menu递归菜单的样式
        meta: { title: '首页', icon: 'setting', deep: 1 },
        component: () => import('views/home/Home.vue')
    }
]
export default routes
