export interface JumpRoute {
    label: string
    path: string
}

export interface Article {
    title: string
    id: number
}

export interface Book {
    id: string
    title: string
    price?: number
}

export type BookParams = Omit<Book, 'id'> & {
    success?: () => void
}
