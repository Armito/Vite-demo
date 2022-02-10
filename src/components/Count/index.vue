<script setup lang="ts">
import { useCount } from './useCount'
import { CountProps } from './data'

defineProps<CountProps>()

const { count, increment } = useCount()

defineExpose({
    increment
})
</script>

<template>
    <button v-marker type="button" @click="increment">
        {{ msg }} count is: {{ count }}
    </button>
</template>

<style scoped></style>
