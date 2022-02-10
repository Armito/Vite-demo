import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'

interface Book {
    id: string
    title: string
    price?: number
}

interface BookParams {
    newBookTitle: string
    newBookPrice: number
    success?: () => void
}

type CheckBookParams = Omit<BookParams, 'success'>

export const useBookStore = defineStore('book', () => {
    const initialBookList: Book[] = JSON.parse(
        sessionStorage.getItem('bookList') || '[]'
    )

    const bookList = useSessionStorage<Book[]>('bookList', initialBookList)

    const addBook = ({
        newBookTitle,
        newBookPrice,
        success = () => {}
    }: BookParams) => {
        if (checkBookParams({ newBookTitle, newBookPrice })) {
            bookList.value.push({
                id: new Date().getTime() + Math.random() + '',
                title: newBookTitle,
                price: newBookPrice
            })
            success()
        }
    }

    const checkBookParams = ({
        newBookTitle,
        newBookPrice
    }: CheckBookParams) => {
        if (!newBookTitle.trim()) {
            alert('书名不能为空！')
            return false
        }
        if (newBookPrice < 0) {
            alert('书价不能低于0！')
            return false
        }
        return true
    }

    return {
        bookList,
        checkBookParams,
        addBook
    }
})
