export interface BookProps {
    author: string
}

export interface BookEmits {
    (event: 'edit'): void
}
