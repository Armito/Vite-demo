export interface Book {
    id: string
    title: string
    price?: number
}

export interface BookParams {
    newBookTitle: string
    newBookPrice: number
    success?: () => void
}

export type CheckBookParams = Omit<BookParams, 'success'>
