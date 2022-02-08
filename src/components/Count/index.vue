<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(0)

const increment = () => {
  count.value++
}

defineExpose({
  increment
})
</script>

<template>
  <button type="button" @click="increment">count is: {{ count }}</button>
</template>

<style scoped>
</style>
