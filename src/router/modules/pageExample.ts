import { RouteRecordRaw } from 'vue-router'
import EmptyRouterView from '@/components/EmptyRouterView.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/pageExample',
        name: 'pageExample',
        meta: { title: '页面示例', icon: 'setting', deep: 1 },
        component: EmptyRouterView,
        children: [
            {
                path: '/ListPage',
                name: 'ListPage',
                meta: { title: '列表页', deep: 2 },
                component: EmptyRouterView,
                children: [
                    {
                        path: '/StandardList',
                        name: 'StandardList',
                        meta: { title: '标准列表页', deep: 3 },
                        component: () => import('ex/pageExample/listPage/StandardList.vue')
                    },
                    {
                        path: '/DetailForm',
                        name: 'DetailForm',
                        meta: { title: '列表详情页', deep: 3, show: false },
                        component: () => import('ex/pageExample/listPage/DetailForm.vue')
                    }
                ]
            },
            {
                path: '/drag',
                name: 'Drag',
                meta: { title: '拖拽', deep: 2 },
                component: () => import('ex/pageExample/drag/index.vue')
            },
            {
                path: '/drag1',
                name: 'Drag1',
                meta: { title: '拖拽1', deep: 2 },
                component: () => import('ex/pageExample/drag/index1.vue')
            },
            {
                path: '/upload',
                name: 'upload',
                meta: { title: 'upload', deep: 2 },
                component: () => import('ex/pageExample/upload/index.vue')
            }
        ]
    }
]
export default routes
