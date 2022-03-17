import { defineComponent, withKeys, PropType } from 'vue'
import { Refs, NewBook, BookTitleDone, AddBook } from './types'

export default defineComponent({
    name: 'BookPad',

    props: {
        refs: {
            type: Object as PropType<Refs>,
            required: true
        },

        newBook: {
            type: Object as PropType<NewBook>,
            required: true
        },

        bookTitleDone: {
            type: Function as PropType<BookTitleDone>,
            required: true
        },

        addBook: {
            type: Function as PropType<AddBook>,
            required: true
        }
    },

    setup: (props) => {
        const {
            refs: {
                bookTitleInput,
                bookPriceInput,
            },
            newBook,
            bookTitleDone,
            addBook,
        } = props

        return () => (
            <>
                书名
                <input
                    ref={bookTitleInput}
                    v-model={newBook.title}
                    v-focus
                    type="text"
                    onKeyup={withKeys(bookTitleDone, ['enter'])}
                />
                价格
                <input
                    ref={bookPriceInput}
                    v-model={newBook.price}
                    type="number"
                    onKeyup={withKeys(addBook, ['enter'])}
                />
                <br />
                <br />
                <button type="button" onClick={addBook}>添加</button>
            </>
        )
    }
})
