<script setup lang="ts" name="articleList">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

interface Article {
    title: string
    id: number
}

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
</script>

<template>
    <div
        v-for="article in articleList"
        :key="article.id"
        @click="checkDetail(article.id)"
    >
        {{ article.title }}
    </div>
</template>
