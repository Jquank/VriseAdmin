import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'

interface State {
    collapse: boolean
}

export const key: InjectionKey<Store<State>> = Symbol()

export default createStore<State>({
    state: {
        collapse: false
    },
    getters: {},
    mutations: {
        changeCollapse(state) {
            state.collapse = !state.collapse
        }
    },
    actions: {},
    modules: {}
})

export function useStore() {
    return baseUseStore(key)
}
