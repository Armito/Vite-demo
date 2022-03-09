import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { JumpBtn } from './types'

export const usePage = () => {
    const jumpBtns = ref<JumpBtn[]>([
        {
            label: 'To play',
            path: '/play'
        },
        {
            label: 'To article list',
            path: '/article/list'
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
