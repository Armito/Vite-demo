<script setup lang="ts" name="book">
import { useBook } from './hooks'

const {
    bookTitleInput,
    bookPriceInput,
    newBook,
    bookList,
    bookNum,
    bookTitleDone,
    addBook
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
</template>

<style scoped></style>
