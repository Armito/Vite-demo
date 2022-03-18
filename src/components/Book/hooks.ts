/*
 * @Author: Armito
 * @Date: 2022-03-09 21:37:08
 * @LastEditTime: 2022-03-15 22:12:34
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Book\hooks.ts
 */
import { computed, reactive, ref } from 'vue'
import { useBookStore } from '@/stores/bookStore'
import { rawRefs } from '@/utils/rawRefs'
import { BookProps, BookEmits } from './types'
import { Book, BookParams } from '@/types/types'

export const useBook = (props: BookProps, emit: BookEmits) => {
    console.log(props)
    console.log(emit)

    const bookTitleInput = ref()

    const bookPriceInput = ref()

    const newBook = reactive<BookParams>({
        title: '',
        price: 0
    })

    const bookStore = useBookStore()

    const bookList = computed(() => bookStore.bookList)

    const bookNum = computed(() => bookStore.bookList.length)

    const bookTitleDone = () => {
        if (bookStore.checkBookParams(newBook)) {
            bookPriceInput.value?.focus()
        }
    }

    const addBook = () => {
        bookStore.addBook({
            ...newBook,
            success: () => {
                newBook.title = ''
                newBook.price = 0
                bookTitleInput.value?.focus()
            }
        })
    }

    const editBook = ({ id, price, title }: Book) => {
        newBook.id = id
        newBook.price = price
        newBook.title = title
    }

    const checkBook = (id: TypeOfProperty<Book, 'id'>) => {
        console.log(id)
    }

    return {
        ...rawRefs({
            bookTitleInput,
            bookPriceInput
        }),
        newBook,
        bookList,
        bookNum,
        bookTitleDone,
        addBook,
        editBook,
        checkBook
    }
}
