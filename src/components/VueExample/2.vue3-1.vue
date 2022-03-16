<template>
    <div>{{ count }}</div>
    <el-button @click="increment">+1</el-button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useCount } from '@/hooks/useCount'

export default defineComponent({
    setup() {
        const { count, increment } = useCount()

        return {
            count,
            increment
        }
    }
})
</script>

<style scoped></style>
