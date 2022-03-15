import { Book } from '@/types/types'

export interface CompProps {
    author: string
    tableData: Book[]
    handleCheck: () => void
    handleEdit: (book: Book) => void
}
