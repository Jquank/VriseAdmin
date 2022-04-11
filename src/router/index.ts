import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import _ from 'lodash'
import type { UserInfo } from '@/types/modules/login'

import { default as base } from './modules/base'
import systemManage from './modules/systemManage'
import { default as authExample } from './modules/authExample'
import { default as pageExample } from './modules/pageExample'
import charts from './modules/charts'

const authRoutes = [...authExample] // 权限路由

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
        children: [...base, ...systemManage, ...pageExample, ...charts]
    }
]

const index = routes.findIndex((r) => r.name === 'Layout')
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
            const matchRouter = getRouterByRole(_.cloneDeep(authRoutes), userInfo.roles)
            // 每次清空所有角色路由
            authRoutes.forEach((r) => {
                if (typeof r.name === 'string') {
                    if (router.hasRoute(r.name)) {
                        router.removeRoute(r.name)
                    }
                }
            })
            // 添加matchRouter到router中
            matchRouter.forEach((r) => {
                if (!router.hasRoute(r.name as string)) {
                    router.addRoute('Layout', r)
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
