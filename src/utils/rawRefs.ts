import { Ref } from 'vue'

interface Refs {
    [ref: string]: Ref
}

export const rawRefs = <T extends Refs>(refs: T) => ({
    ...refs,
    rawRefs: {
        ...refs
    }
})
