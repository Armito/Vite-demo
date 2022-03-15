import { defineComponent } from 'vue'
import Comp from './template'
import { useComp } from './hooks'

export default defineComponent({
    name: 'Comp',

    props: {
        author: {
            type: String,
            default: 'Armito'
        }
    },

    setup({ author }, { expose }) {
        const { count, onIncrement } = useComp()

        expose({ onIncrement })

        return () => (
            <Comp
                count={count.value}
                author={author}
                onIncrement={onIncrement}
            />
        )
    }
})
