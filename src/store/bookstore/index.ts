/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-15 22:11:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\store\bookStore\index.ts
 */
import { defineStore } from 'pinia'
import { useSessionStorage } from '@vueuse/core'
import { Book, BookParams } from '@/types/types'

export const useBookStore = defineStore('book', () => {
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
                    id: new Date().getTime() + Math.random() + '',
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
})
