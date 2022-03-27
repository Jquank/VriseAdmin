import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import roleRouter from './roleRoute'
import _ from 'lodash'
import type { UserInfo } from '@/types/modules/login'
import examplesRoute from './examplesRoute'

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
        component: () => import('components/Layout.vue'),
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

const index = routes.findIndex((r) => r.name === 'Layout')
examplesRoute.forEach((r) => {
    routes[index].children?.push(r)
})

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// 辅助函数，判断roleRoute的每一项是否有角色权限
export const hasRole = (item: RouteRecordRaw, roles: string[]): boolean => {
    if (roles.indexOf(item.name as string) > -1) {
        return true
    } else {
        if (item.children && item.children.length) {
            return item.children.some((v) => {
                return hasRole(v, roles)
            })
        } else {
            return false
        }
    }
}
// 根据角色匹配异步路由，arr传roleRoute数组的副本
export const getRouterByRole = (arr: Array<RouteRecordRaw>, roles: string[]): Array<RouteRecordRaw> => {
    if (!roles) {
        return []
    }
    if (roles.indexOf('All') > -1) {
        // 此条件测试所有权限，可删除
        return arr
    }
    let i = 0
    while (i < arr.length) {
        const item = arr[i]
        if (!hasRole(item, roles)) {
            arr.splice(i, 1)
            i--
        } else {
            if (item.children && item.children.length) {
                getRouterByRole(item.children, roles)
            }
        }
        i++
    }
    return arr
}

let refreshflag = false // 刷新标识
router.beforeEach(async (to) => {
    const token = sessionStorage.getItem('token') || ''
    const userInfo = JSON.parse(sessionStorage.getItem('userInfo') || '{"roles":[]}') as UserInfo
    if (!token || !userInfo.roles) {
        if (to.name === 'Login') {
            return
        } else {
            return '/Login'
        }
    } else {
        if (to.name === 'Login') {
            return '/Home'
        } else {
            if (refreshflag) {
                return
            }
            const matchRouter = getRouterByRole(_.cloneDeep(roleRouter), userInfo.roles)
            // 每次清空所有角色路由
            roleRouter.forEach((r) => {
                if (typeof r.name === 'string') {
                    if (router.hasRoute(r.name)) {
                        router.removeRoute(r.name)
                        // ;(routes[index].children || []).splice(1)
                    }
                }
            })
            // 添加matchRouter到router中
            matchRouter.forEach((r) => {
                if (!router.hasRoute(r.name as string)) {
                    router.addRoute('Layout', r)
                    ;(routes[index].children || []).push(r)
                }
            })
            // 添加404
            router.addRoute('Layout', {
                path: '/:pathMatch(.*)*',
                name: 'NotFound',
                component: () => import('@/views/other/404.vue'),
                meta: { title: '404' }
            })
            refreshflag = true
            // await router.replace(router.currentRoute.value.fullPath)
            return to.fullPath
        }
    }
})

export default router
