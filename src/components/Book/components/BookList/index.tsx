import { BookListProps } from './types'

export default (props: BookListProps) => {
    const { bookList, bookNum } = props

    return (
        <>
            {
                bookList.map(book => (
                    <div key={book.id}>
                        {book.title} : ￥{book.price || '?'}
                    </div>
                ))
            }
            <div>共{bookNum}本</div>
        </>
    )
}
