import { computed, reactive, ref } from 'vue'
import { useBookStore } from '@/store/bookStore'

export const useBook = () => {
    const bookTitleInput = ref()
    const bookPriceInput = ref()

    const newBook = reactive<BookParams>({
        title: '',
        price: 0
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
                newBook.title = ''
                newBook.price = 0
                bookTitleInput.value.focus()
            }
        })
    }

    return {
        bookTitleInput,
        bookPriceInput,
        newBook,
        bookList,
        bookTitleDone,
        addBook
    }
}
