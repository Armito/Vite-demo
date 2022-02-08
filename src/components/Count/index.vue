<script setup lang="ts">
import { ref, ObjectDirective } from 'vue'
import VueLogo from '@/assets/logo.png'

defineProps<{ msg: string }>()

const count = ref(0)

const increment = () => {
  count.value++
}

const vMarker: ObjectDirective = {
  mounted: (el: HTMLElement) => {
    el.style.backgroundImage = `url(${VueLogo})`
    el.style.backgroundPosition = 'center'
    el.style.backgroundSize = 'contain'
  }
}

defineExpose({
  increment
})
</script>

<template>
  <button v-marker="null" type="button" @click="increment">count is: {{ count }}</button>
</template>

<style scoped>
</style>
