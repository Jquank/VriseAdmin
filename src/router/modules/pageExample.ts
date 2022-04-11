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
            }
        ]
    }
]
export default routes
