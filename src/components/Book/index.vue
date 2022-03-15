<!--
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-15 22:37:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Book\index.vue
-->
<script setup lang="ts" name="book">
import { useBook } from './hooks'
import Comp from '@/components/Comp/index'

const {
    bookTitleInput,
    bookPriceInput,
    newBook,
    bookList,
    bookNum,
    bookTitleDone,
    addBook,
    editBook
} = useBook()
</script>

<template>
    书名
    <input
        ref="bookTitleInput"
        v-model="newBook.title"
        v-focus
        type="text"
        @keydown.enter="bookTitleDone"
    />
    价格
    <input
        ref="bookPriceInput"
        v-model="newBook.price"
        type="number"
        @keydown.enter="addBook"
    />
    <br />
    <br />
    <button type="button" @click="addBook">添加</button>
    <div v-for="book in bookList" :key="book.id">
        {{ book.title }} : ￥{{ book.price || '?' }}
    </div>
    <div>共{{ bookNum }}本</div>
    <Comp author="okabe" @edit="editBook" />
</template>

<style scoped></style>
