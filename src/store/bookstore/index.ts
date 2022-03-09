import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'

export const useBookStore = defineStore('book', () => {
    const bookList = useSessionStorage<Book[]>('bookList', [])

    const addBook = ({ title, price = 0, success = () => {} }: BookParams) => {
        if (checkBookParams({ title, price })) {
            bookList.value.push({
                id: new Date().getTime() + Math.random() + '',
                title: title,
                price: price
            })
            success()
        }
    }

    const checkBookParams = ({ title, price = 0 }: BookParams) => {
        if (!title.trim()) {
            alert('书名不能为空！')
            return false
        }
        if (price < 0) {
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
