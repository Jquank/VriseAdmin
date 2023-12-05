import { RouteRecordRaw } from 'vue-router'
import EmptyRouterView from '@/components/EmptyRouterView.vue'
const routes: Array<RouteRecordRaw> = [
    {
        path: '/WebNotes',
        name: 'WebNotes',
        meta: { title: '前端笔记', icon: 'setting', deep: 1 },
        component: EmptyRouterView,
        children: [
            {
                path: '/LyricsEffect',
                name: 'LyricsEffect',
                meta: { title: '歌词滚动', deep: 2 },
                component: () => import('views/webNotes/lyricsEffect/index.vue')
            }
        ]
    }
]
export default routes
