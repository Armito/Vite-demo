import { useImmutable } from '@/hooks/immutable'
import { useRx } from '@/hooks/rx'

export const usePlay = () => {
    useImmutable()
    const { count } = useRx()

    window.helloWorld = () => {
        console.log('El Psy Congroo!')
    }

    window.helloWorld()

    return {
        count
    }
}
