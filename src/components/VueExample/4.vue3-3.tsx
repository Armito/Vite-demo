import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)
        const increment = () => {
            count.value = count.value + 1
        }

        return () => (
            <>
                <div>{count.value}</div>
                <el-button onClick={increment}>+1</el-button>
            </>
        )
    }
})
