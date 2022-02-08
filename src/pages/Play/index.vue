<script setup lang="ts" name="play">
import Book from '@/components/Book/index.vue'
import Father from '@/components/Father/index.vue'
import Slots from '@/components/Slots/index.vue'
</script>

<template>
    <div>
        Just Play!
        <br>
        Enjoy Yourself!
        <br>
        <br>
        <Book />
        <Father />
        <Slots class="aaa" name="Pikachu" :hobby="['game']" @change="">
            <template #header="{ name, hobby }">
                <div>header</div>
                <div>{{ name }}</div>
                <div>{{ hobby }}</div>
            </template>
            <template #footer>
                <div>footer</div>
            </template>
        </Slots>
    </div>
</template>

<style scoped>
</style>
