import { useSessionStorage } from '@vueuse/core'
import { v4 as uuidv4 } from 'uuid'
import { Book, BookParams } from '@/types/types'

export const useBook = () => {
    const bookList = useSessionStorage<Book[]>('bookList', [])

    const addBook = ({
        title,
        price = 0,
        success = () => {},
        id
    }: BookParams) => {
        if (checkBookParams({ title, price })) {
            if (id) {
                const targetIdx = bookList.value.findIndex(
                    book => book.id === id
                )
                bookList.value.splice(targetIdx, 1, {
                    id,
                    title: title,
                    price: price
                })
            } else {
                bookList.value.push({
                    id: uuidv4(),
                    title: title,
                    price: price
                })
            }
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
}
