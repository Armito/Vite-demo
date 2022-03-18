export interface BookTableProps {
    author: string
}

export type BookTableEmits = (event: 'check' | 'edit', ...args: any[]) => void
