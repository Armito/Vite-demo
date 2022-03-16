import { useImmutable } from '@/hooks/useImmutable'
import { useRx } from '@/hooks/useRx'

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
