/* eslint-disable */
import 'vue-router'
declare module 'vue-router' {
  interface RouteMeta {
      title: string,
      icon?: string, // el图标名
      deep?: number // 菜单深度
      show?: boolean // 是否展示在菜单栏
  }
}
