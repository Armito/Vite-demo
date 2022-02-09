<script setup lang="ts">
import { ref } from 'vue'
import Count from '../Count/index.vue'

const countRef = ref()

const plus = () => {
    countRef.value.increment?.()
}
</script>

<template>
    <Count ref="countRef" msg="father call" />
    <div>
        <el-button @click="plus">+++</el-button>
    </div>
</template>

<style scoped></style>
