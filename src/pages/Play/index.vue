<!--
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-15 22:39:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\Play\index.vue
-->
<script setup lang="ts" name="play">
import Book from '@/components/Book/index'
import Father from '@/components/Father/index.vue'
import Slot from '@/components/Slot/index.vue'
import { usePlay } from './hooks'

const { count } = usePlay()
</script>

<template>
    <div>
        Just Play!
        <br />
        Enjoy Yourself!
        <br />
        <br />
        <Book />
        <Father />
        <Slot class="aaa" name="Pikachu" :hobby="['game']">
            <template #header="{ name, hobby }">
                <div>header</div>
                <div>{{ name }}</div>
                <div>{{ hobby }}</div>
            </template>
            <template #footer>
                <div>footer</div>
            </template>
        </Slot>
        {{ count }}
    </div>
</template>

<style scoped></style>
