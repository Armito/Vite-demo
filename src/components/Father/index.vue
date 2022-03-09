<script setup lang="ts">
import { ref } from 'vue'
import Count from '../Count/index.vue'

const countRef = ref()

const msg = ref('Armito call 2')

const plus = () => {
    countRef.value.increment?.()
    msg.value = msg.value + '3'
}
</script>

<template>
    <Count ref="countRef" :msg="msg" />
    <div>
        <el-button @click="plus">+++</el-button>
    </div>
</template>

<style scoped></style>
