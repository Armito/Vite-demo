<script setup lang="ts">
import { useSlot } from './hooks'

const slotsProps = withDefaults(
    defineProps<{
        name?: string
        hobby?: string[]
    }>(),
    {
        name: 'Armito',
        hobby: () => []
    }
)

const { age } = useSlot()
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

<style scoped></style>
