import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { JumpRoute } from '@/types/types'

export const usePage = () => {
    const jumpBtns = ref<JumpRoute[]>([
        {
            label: 'To play',
            path: '/play'
        },
        {
            label: 'To article list',
            path: '/article/list'
        },
        {
            label: 'To note list',
            path: '/note'
        },
        {
            label: 'To playtwo',
            path: '/playTwo'
        }
    ])

    const router = useRouter()

    const jump = (path: string) => {
        router.push(path)
    }

    return {
        jumpBtns,
        jump
    }
}
