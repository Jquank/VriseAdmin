import { RouteRecordRaw } from 'vue-router'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/charts',
        name: 'charts',
        meta: { title: '图表', icon: 'charts', deep: 1 },
        component: () => import('views/charts/index.vue')
    }
]
export default routes
