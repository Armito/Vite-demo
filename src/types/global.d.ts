interface Article {
    title: string
    id: number
}

interface Book {
    id: string
    title: string
    price?: number
}

type BookParams = Omit<Book, 'id'> & {
    success?: () => void
}
