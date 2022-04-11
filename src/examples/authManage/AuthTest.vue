<template>
    <h3>权限测试页</h3>
    <div class="div1">
        <div class="div2">
            <el-table :data="[{ index: 333 }]">
                <el-table-column label="111" prop="index"></el-table-column>
            </el-table>
        </div>
        <div class="div3"></div>
    </div>
</template>
<style lang="less">
    .div1 {
        display: flex;
        height: 500px;
        width: 100%;
        .div2 {
            flex: 1;
        }
        .div3 {
            width: 200px;
            background-color: #fff;
        }
    }
</style>
