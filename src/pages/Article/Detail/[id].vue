<script setup lang="ts" name="articleDetail">
import { useRoute } from 'vue-router'

const {
    params: { id: articleId }
} = useRoute()
</script>

<template>
    <div>Detail: {{ articleId }}</div>
</template>
