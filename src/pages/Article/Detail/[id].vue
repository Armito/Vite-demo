<script setup lang="ts" name="articleDetail">
import { useRoute } from 'vue-router'

const {
    params: { id }
} = useRoute()
</script>

<template>
    <div>Detail: {{ id }}</div>
</template>
