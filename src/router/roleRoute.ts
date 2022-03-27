import { RouteRecordRaw } from 'vue-router'
import EmptyRouterView from '@/components/EmptyRouterView.vue'
const roleRouter: Array<RouteRecordRaw> = [
    {
        path: '/SystemManage',
        name: 'SystemManage',
        meta: { title: '系统管理', icon: 'setting', deep: 1 },
        component: EmptyRouterView,
        children: [
            {
                path: '/RoleManage',
                name: 'RoleManage',
                meta: { title: '角色管理', deep: 2 },
                component: () => import('views/systemManage/RoleManage.vue')
            }
        ]
    }
]
export default roleRouter
