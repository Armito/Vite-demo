import { SetupContext, withKeys } from 'vue'
import { BookPadProps } from './types'

export default (props: BookPadProps, context: SetupContext) => {
    const {
        refs: {
            bookTitleInput,
            bookPriceInput,
        },
        newBook,
        bookTitleDone,
        addBook,
    } = props

    return (
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
