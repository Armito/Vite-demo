import { defineComponent, PropType } from 'vue'
import { BookList } from './types'

export default defineComponent({
    name: 'BookList',

    props: {
        bookList: {
            type: Array as PropType<BookList>,
            required: true
        },

        bookNum: {
            type: Number,
            default: 0
        }
    },

    setup: (props) => {
        const { bookList, bookNum } = props

        return () => (
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
    },
})
