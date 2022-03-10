import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Article } from '@/types/types'

export const useList = () => {
    const articleList = ref<Article[]>([
        {
            title: 'aaa',
            id: 1
        },
        {
            title: 'bbb',
            id: 2
        },
        {
            title: 'ccc',
            id: 3
        },
        {
            title: 'ddd',
            id: 4
        },
        {
            title: 'eee',
            id: 5
        }
    ])

    const router = useRouter()

    const checkDetail = (articleId: number) => {
        router.push(`/article/detail/${articleId}`)
    }

    return {
        articleList,
        checkDetail
    }
}
