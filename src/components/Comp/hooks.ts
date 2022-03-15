import { ref } from 'vue'

export const useComp = () => {
    const count = ref<number>(0)
    const onIncrement = () => {
        count.value = count.value + 1
    }

    return {
        count,
        onIncrement
    }
}
