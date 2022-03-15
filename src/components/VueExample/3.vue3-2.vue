<template>
    <div>{{ count }}</div>
    <el-button @click="increment">+1</el-button>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const count = ref(0)
const increment = () => {
    count.value = count.value + 1
}
</script>

<style scoped></style>
