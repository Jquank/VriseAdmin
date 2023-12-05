/* eslint-disable */
declare module '*.vue' {
    import type { DefineComponent, ImportMeta } from 'vue'
   
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module 'element-plus/dist/locale/zh-cn.mjs'