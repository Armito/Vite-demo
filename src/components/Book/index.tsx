/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-15 22:37:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Book\index.vue
*/
import { defineComponent } from 'vue'
import BookPad from './components/BookPad/index'
import BookList from './components/BookList/index'
import BookTable from '@/components/BookTable/index'
import { useBook } from './hooks'
import moment from 'moment'

export default defineComponent({
    name: 'Book',

    props: {
        author: {
            type: String,
            default: 'Okabe'
        }
    },

    setup: (props, context) => {
        const { author } = props

        const { emit } = context

        const {
            rawRefs,
            newBook,
            bookList,
            bookNum,
            bookTitleDone,
            addBook,
            editBook
        } = useBook(props, emit)

        const today = moment().format('YYYY-MM-DD HH:mm:ss')

        return () => (
            <>
                <BookPad
                    refs={rawRefs}
                    newBook={newBook}
                    bookTitleDone={bookTitleDone}
                    addBook={addBook}
                />

                <BookList bookList={bookList.value} bookNum={bookNum.value} />
                
                <BookTable author={author} onEdit={editBook}>
                    {{
                        header: (_author: typeof author) => _author,
                        footer: () => today
                    }}
                </BookTable>
            </>
        )
    }
})
