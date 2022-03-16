import { defineComponent, ref } from 'vue'
import { useCount } from '@/hooks/useCount'

export default defineComponent({
    setup() {
        const { count, increment } = useCount()

        return () => (
            <>
                <div>{count.value}</div>
                <el-button onClick={increment}>+1</el-button>
            </>
        )
    }
})
