<template>
    <div>
        <el-select v-model="value.v" value-key="id">
            <el-option v-for="item in options" :key="item.id" :label="item.label" :value="item"></el-option>
        </el-select>
    </div>
</template>

<script setup lang="ts">
    import { ref, reactive, watch } from 'vue'
    import { useRoute } from 'vue-router'
    import { ClickOutside as vClickOutside } from 'element-plus'
    import { ElMessage } from 'element-plus'
    const route = useRoute()
    watch(
        () => route,
        (val) => {
            console.log(val, 'wwwwwww')
        },
        { immediate: true }
    )
    const value = reactive({
        v: { id: 1, label: '111' }
    })
    const value1 = ref('')
    const input = ref('')
    const option1 = ref()
    const hhh = ref(null)
    const widthQ = ref(0)
    const expandChange = () => {
        let el = document.getElementsByClassName('aaa')[0]
        let el1 = document.getElementsByClassName('ccc')[0] as HTMLDivElement
        // console.log(option1.value)

        // option1.value.$el.style.width = el.clientWidth + 'px'
        // console.dir(el1)
        // document.getElementsByClassName('ccc')[0].style.width = el.clientWidth + 'px'
    }
    const innerOption = (e: MouseEvent) => {
        // e.stopPropagation()
    }
    const aaa = (a: any, b: any) => {
        console.log(11111111)

        return
    }
    const aaa1 = () => {
        ElMessage({
            type: 'success',
            duration: 1000000,
            message: 'Centered text'
        })
    }
    const options = ref([{ id: 2, label: '222' }])
    // interface Tt<T> {
    //     a: number
    //     b: T
    // }
    // type Required<T> = { [P in keyof T]: T[P] }

    // let aaa: Required<Tt<string>> = {
    //     a: 1,
    //     b: '222'
    // }
    // console.log(aaa)
    // type Pick<T, K extends keyof T> = { [P in K]: T[P] }

    // interface Bb {
    //     a: number
    //     b: string
    // }
    // let bbb: Pick<Bb, 'a'> = {
    //     a: 0
    // }
    // console.log(bbb)

    // type T = Exclude<1 | 2, 1 | 3>
    // let ccc: T = 2

    // function foo(x: number): Array<number> {
    //     return [x]
    // }
    // type fn = ReturnType<typeof foo>
</script>

<style lang="less">
    .ccc {
        width: v-bind('widthQ');
    }
</style>
