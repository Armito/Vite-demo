import { Ref } from 'vue'
import { BookParams } from '@/types/types'
export interface Refs {
    bookTitleInput: Ref
    bookPriceInput: Ref
}

export type NewBook = BookParams

export type BookTitleDone = () => void

export type AddBook = (payload: MouseEvent) => void
