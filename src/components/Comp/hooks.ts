/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 21:45:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Comp\hooks.ts
 */
import { computed, SetupContext } from 'vue'
import { useBookStore } from '@/store/bookStore'
import { Book } from '@/types/types'

export const useComp = ({ emit }: SetupContext) => {
    const bookStore = useBookStore()
    const tableData = computed(() => bookStore.bookList)

    const handleCheck = () => {}

    const handleEdit = (book: Book) => {
        emit('edit', book)
    }

    return {
        tableData,
        handleCheck,
        handleEdit
    }
}
