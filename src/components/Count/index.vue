<script setup lang="ts">
import { useCount } from './useCount'

defineProps<{ msg: string }>()

const { count, increment } = useCount()

defineExpose({
    increment
})
</script>

<template>
    <button v-marker="null" type="button" @click="increment">
        {{ msg }} count is: {{ count }}
    </button>
</template>

<style scoped></style>
