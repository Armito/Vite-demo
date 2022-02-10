<!--
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-02-10 20:57:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Count\index.vue
-->
<script setup lang="ts">
import { useCount } from './useCount'

withDefaults(
    defineProps<{
        msg: string
    }>(),
    {
        msg: 'Armito'
    }
)

const { count, increment, decrement, double } = useCount()

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
            <div>{{ msg }} count is: {{ count }}</div>
        </template>
    </el-card>
    <el-button type="button" @click="increment">+++</el-button>
    <el-button type="button" @click="decrement">---</el-button>
    <el-button type="button" @click="double">x2</el-button>
</template>

<style scoped></style>
