<script setup lang="ts" name="play">
import Book from '@/components/Book/index.vue'
import Father from '@/components/Father/index.vue'
import Slot from '@/components/Slot/index.vue'
import Comp from '@/components/Comp/index.vue'
import { usePlay } from './hooks'

const { count } = usePlay()
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
        <Comp />
        {{ count }}
    </div>
</template>

<style scoped></style>
