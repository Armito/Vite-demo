import { SetupContext } from 'vue'
import { Book } from '@/types/types'

export interface BookTableProps {
    author: string
}

export interface BookTableTemplateProps {
    context: SetupContext<'edit'[]>
    author: string
    tableData: Book[]
    handleCheck: (id: TypeOfProperty<Book, 'id'>) => void
    handleEdit: (book: Book) => void
}
