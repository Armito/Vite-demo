import { useImmutable } from '@/hooks/immutable'
import { useRx } from '@/hooks/rx'

export const usePlay = () => {
    useImmutable()
    useRx()

    window.helloWorld = () => {
        console.log('El Psy Congroo!')
    }

    window.helloWorld()
}
