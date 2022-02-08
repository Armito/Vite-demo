<script setup lang="ts">
import { ref, useAttrs, useSlots } from 'vue'

interface SlotsProps {
    name?: string;
    hobby?: string[];
}

const slotsProps = withDefaults(defineProps<SlotsProps>(), {
    name: 'Armito'
})

const age = ref(18)

const attrs = useAttrs()
console.log('attrs:', attrs)

const slots = useSlots()
console.log('slots:', slots)
</script>

<template>
    <div>
        {{ name }}:{{ age }}
        <div>
            <slot name="header" v-bind="slotsProps"></slot>
        </div>
        <div>
            <slot name="body"></slot>
        </div>
        <div>
            <slot name="footer"></slot>
        </div>
    </div>
</template>

<style scoped>
</style>
