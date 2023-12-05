<template>
    <div style="display: flex">
        <div class="d1" draggable="true" @dragstart="dragstart" @drag="drag" @dragend="dragend">111</div>
        <!-- <div class="d2" draggable="true">222</div> -->
        <div class="d3" @dragenter="dragenter" @dragover="dragover" @dragleave="dragleave" @drop="drop"></div>
    </div>
</template>

<script setup lang="ts">
    import { ref } from 'vue'
    import { aaa } from '@/types/common'
    console.log(aaa.value, 'aaa')

    let originX = 0
    let originY = 0
    let mouseX = 0
    let mouseY = 0
    const dragstart = (e: DragEvent) => {
        // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        // e.dataTransfer!.effectAllowed = 'link'
        e.dataTransfer?.setData('text/plain', 'start')
        // console.log(e, 'dragstart')
        originX = e.x
        originY = e.y
    }
    const drag = () => {
        console.log(111)
    }
    let dropFlag = false
    const dragend = (e: DragEvent) => {
        dropFlag ? (dropFlag = false) : dropFn(e, dropFlag)
        console.log('dragend')
        const tar = e.target as HTMLElement
        const startPoi = window.getComputedStyle(tar).transform
        // console.log(startPoi)
        // tar.style.transform = `translate(${e.x - originX}px,${e.y - originY}px)`
    }
    const dragenter = () => {
        // console.log('dragenter')
    }
    const dragover = (e: DragEvent) => {
        dropFlag = false
        e.preventDefault()
    }
    const dropFn = (e: DragEvent, dropFlag: boolean) => {
        // e.preventDefault()
        console.log(e.dataTransfer?.getData('text/plain'), '111')
        console.log('触发drop' + `${!dropFlag ? '1111111111111' : ''}`)
    }
    const drop = (e: DragEvent) => {
        dropFlag = true
        dropFn(e, true)
    }
    const dragleave = (e: DragEvent) => {
        // console.log(222)
    }
</script>

<style lang="less" scoped>
    .d1 {
        width: 200px;
        height: 200px;
        background-color: aqua;
    }
    .d2 {
        width: 200px;
        height: 200px;
        background-color: blanchedalmond;
    }
    .d3 {
        width: 1000px;
        height: 1000px;
        background-color: #fff;
    }
</style>
