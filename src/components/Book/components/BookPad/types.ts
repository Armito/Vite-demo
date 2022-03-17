import { Ref } from 'vue'
import { BookParams } from '@/types/types'

export interface BookPadProps {
    refs: {
        bookTitleInput: Ref
        bookPriceInput: Ref
    }
    newBook: BookParams
    bookTitleDone: () => void
    addBook: () => void
}
