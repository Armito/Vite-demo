import { ref, useAttrs, useSlots } from 'vue'

export const useSlot = () => {
    const age = ref(18)

    const attrs = useAttrs()
    console.log('attrs:', attrs)

    const slots = useSlots()
    console.log('slots:', slots)

    return {
        age
    }
}
