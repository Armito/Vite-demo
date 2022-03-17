<!--
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-15 22:37:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Book\index.vue
-->
<script setup lang="ts" name="book">
import BookPad from './components/BookPad/index'
import BookList from './components/BookList/index'
import BookTable from '@/components/BookTable/index'
import { useBook } from './hooks'
import moment from 'moment'

const props = withDefaults(
    defineProps<{
        author?: string
    }>(),
    {
        author: 'Okabe'
    }
)

const emit = defineEmits<{
    (event: 'edit'): void
}>()

const {
    rawRefs,
    newBook,
    bookList,
    bookNum,
    bookTitleDone,
    addBook,
    editBook
} = useBook(props, emit)

const today = moment().format('YYYY-MM-DD HH:mm:ss')

defineExpose({ editBook })
</script>

<template>
    <BookPad
        :refs="rawRefs"
        :newBook="newBook"
        :bookTitleDone="bookTitleDone"
        :addBook="addBook"
    />
    <BookList :bookList="bookList" :bookNum="bookNum" />
    <BookTable :author="props.author" @edit="editBook">
        <template #header="data">{{ data.author }}</template>
        <template #footer>{{ today }}</template>
    </BookTable>
</template>

<style scoped></style>
