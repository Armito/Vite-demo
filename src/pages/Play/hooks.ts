import { useImmutable } from '@/hooks/immutable'
import { useRx } from '@/hooks/rx'

export const usePlay = () => {
    useImmutable()
    useRx()
}
