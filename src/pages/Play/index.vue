<script setup lang="ts" name="play">
import { ref } from 'vue'
import Book from '@/components/Book/index.vue'
import Father from '@/components/Father/index.vue'
import Slot from '@/components/Slot/index.vue'
import Comp from '@/components/Comp/index'
import { usePlay } from './hooks'

const { count } = usePlay()
const compRef = ref()
const tip = () => {
    compRef.value.onIncrement?.()
}
</script>

<template>
    <div>
        Just Play!
        <br />
        Enjoy Yourself!
        <br />
        <br />
        <Book />
        <Father />
        <Slot class="aaa" name="Pikachu" :hobby="['game']">
            <template #header="{ name, hobby }">
                <div>header</div>
                <div>{{ name }}</div>
                <div>{{ hobby }}</div>
            </template>
            <template #footer>
                <div>footer</div>
            </template>
        </Slot>
        <el-button @click="tip"></el-button>
        <Comp ref="compRef" author="okabe" />
        {{ count }}
    </div>
</template>

<style scoped></style>
