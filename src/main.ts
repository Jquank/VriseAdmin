import { createApp } from 'vue'
import router from './router/index'
import App from './App.vue'
import { Expand, Setting, ArrowDown } from '@element-plus/icons-vue'
import './css/index.less'
import store, { key } from './store/index'

const app = createApp(App)

app.component('Expand', Expand)
app.component('Setting', Setting)
app.component('ArrowDown', ArrowDown)

app.use(router)
app.use(store, key)

app.mount('#app')
