<template>
    <div>{{ count }}</div>
    <el-button @click="increment">+1</el-button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
    setup() {
        const count = ref(0)
        const increment = () => {
            count.value = count.value + 1
        }

        return {
            count,
            increment
        }
    }
})
</script>

<style scoped></style>
