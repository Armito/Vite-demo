import { defineComponent, ref } from 'vue'
import Comp from './component'

export default defineComponent({
    name: 'Comp',

    props: {
        author: {
            type: String,
            default: 'Armito'
        }
    },

    setup({ author }, { expose }) {
        const count = ref<number>(0)
        const onIncrement = () => {
            count.value = count.value + 1
        }
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
