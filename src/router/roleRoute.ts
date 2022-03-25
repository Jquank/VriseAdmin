import { RouteRecordRaw } from 'vue-router'
import EmptyRouterView from '@/components/EmptyRouterView.vue'
const roleRouter: Array<RouteRecordRaw> = [
    {
        path: '/AuthManage',
        name: 'AuthManage',
        meta: { title: '权限管理', icon: 'setting', deep: 1 },
        component: EmptyRouterView,
        children: [
            {
                path: '/MenuAuth',
                name: 'MenuAuth',
                meta: { title: '菜单权限', deep: 2 },
                component: () => import('ex/authManage/MenuAuth.vue')
            },
            {
                path: '/ButtonAuth',
                name: 'ButtonAuth',
                meta: { title: '按钮权限', deep: 2 },
                component: () => import('ex/authManage/ButtonAuth.vue')
            },
            {
                path: '/MenuAuthTest',
                name: 'MenuAuthTest',
                meta: { title: '权限测试页1', deep: 2 },
                component: () => import('ex/authManage/TestAuth1.vue')
            }
        ]
    }
]
export default roleRouter
