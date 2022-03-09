<script setup lang="ts" name="articleList">
import { useList } from './hook'
const { articleList, checkDetail } = useList()
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
