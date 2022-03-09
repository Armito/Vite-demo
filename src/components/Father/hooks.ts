import { ref } from 'vue'

export const useFather = () => {
    const countRef = ref()

    const msg = ref('Armito call 2')

    const plus = () => {
        countRef.value.increment?.()
        msg.value = msg.value + '3'
    }

    return {
        countRef,
        msg,
        plus
    }
}
