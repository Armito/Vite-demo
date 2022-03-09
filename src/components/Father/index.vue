<script setup lang="ts" name="father">
import Count from '@/components/Count/index.vue'
import { useFather } from './hooks'

const { countRef, msg, plus } = useFather()
</script>

<template>
    <Count ref="countRef" :msg="msg" />
    <div>
        <el-button @click="plus">+++</el-button>
    </div>
</template>

<style scoped></style>
