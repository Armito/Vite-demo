import { ref } from 'vue'

export const useCount = () => {
    const count = ref<number>(0)

    const increment = () => {
        count.value++
    }

    const decrement = () => {
        count.value--
    }

    const double = () => {
        count.value = count.value * 2
    }

    const divide = () => {
        count.value = count.value / 2
    }

    return {
        count,
        increment,
        decrement,
        double,
        divide
    }
}
