/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 21:45:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\BookTable\hooks.ts
 */
import { computed } from 'vue'
import { useBookStore } from '@/store/bookStore'
import { BookTableProps } from './types'
import { Book } from '@/types/types'

export const useBookTable = (
    props: BookTableProps,
    emit: (event: 'check' | 'edit', ...args: any[]) => void
) => {
    const bookStore = useBookStore()

    const tableData = computed(() => bookStore.bookList)

    const handleCheck = (id: TypeOfProperty<Book, 'id'>) => {
        emit('check', id)
    }

    const handleEdit = (book: Book) => {
        emit('edit', book)
    }

    return {
        tableData,
        handleCheck,
        handleEdit
    }
}
