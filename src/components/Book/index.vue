<script setup lang="ts" name="book">
import { computed, reactive, ref } from 'vue'
import { useBookStore } from '@/store/bookStore'

const bookTitleInput = ref()
const bookPriceInput = ref()
const newBook = reactive({
    newBookTitle: '',
    newBookPrice: 0
})
const bookStore = useBookStore()
const bookList = computed(() => bookStore.bookList)

const bookTitleDone = () => {
    if (bookStore.checkBookParams(newBook)) {
        bookPriceInput.value.focus()
    }
}

const addBook = () => {
   bookStore.addBook({
        ...newBook,
        success: () => {
            newBook.newBookTitle = ''
            newBook.newBookPrice = 0
            bookTitleInput.value.focus()
        }
   }) 
}
</script>

<template>
    书名
    <input 
        v-model="newBook.newBookTitle" 
        v-focus
        ref="bookTitleInput"
        type="text"
        @keydown.enter="bookTitleDone" 
    />
    价格
    <input 
        v-model="newBook.newBookPrice" 
        ref="bookPriceInput" 
        type="number" 
        @keydown.enter="addBook" 
    />
    <br>
    <br>
    <button 
        type="button" 
        @click="addBook"
    >
        添加
    </button>
    <div 
        v-for="book in bookList" 
        :key="book.id"
    >
        {{ book.title }} : ￥{{ book.price || '?' }}
    </div>
</template>

<style scoped>
</style>
