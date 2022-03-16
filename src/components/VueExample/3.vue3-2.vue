<template>
    <div>{{ count }}</div>
    <el-button @click="increment">+1</el-button>
</template>

<script setup lang="ts">
import { useCount } from '@/hooks/useCount'

const { count, increment } = useCount()
</script>

<style scoped></style>
