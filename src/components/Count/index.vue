<!--
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-02-10 21:02:03
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Count\index.vue
-->
<script setup lang="ts">
import { useCount, useMessage } from './hooks'

const propsWithDefaults = withDefaults(
    defineProps<{
        msg: string
    }>(),
    {
        msg: 'Armito'
    }
)

const { count, increment, decrement, double, divide } = useCount()

const { message, handleMsg } = useMessage(propsWithDefaults)

defineExpose({
    increment
})
</script>

<template>
    <el-card>
        <template #header>
            <div v-marker>加减乘除</div>
        </template>
        <template #default>
            <div>{{ message }} count is: {{ count }}</div>
            <div>{{ handleMsg(msg) }} count is: {{ count }}</div>
            <div>{{ propsWithDefaults.msg }} count is: {{ count }}</div>
        </template>
    </el-card>
    <el-button type="success" @click="increment">+++</el-button>
    <el-button type="danger" @click="decrement">---</el-button>
    <el-button type="warning" @click="double">x2</el-button>
    <el-button type="default" @click="divide">/2</el-button>
</template>

<style scoped></style>
