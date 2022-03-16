import { ref } from 'vue'

export const useCount = () => {
    const count = ref(0)
    const increment = () => {
        count.value = count.value + 1
    }

    return {
        count,
        increment
    }
}
