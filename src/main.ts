import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import ElementPlus from 'element-plus'
import { Expand, Setting } from '@element-plus/icons-vue'
import './css/index.less'
import store, { key } from './store/index'

const app = createApp(App)

app.component('Expand', Expand)
app.component('Setting', Setting)

app.use(ElementPlus, { size: 'default', zIndex: 3000 })
app.use(router)
app.use(store, key)

app.mount('#app')
