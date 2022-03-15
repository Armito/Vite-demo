<template>
    <div>{{ count }}</div>
    <el-button @click="increment">+1</el-button>
</template>

<script>
export default {
    data() {
        return {
            count: 0
        }
    },

    methods: {
        increment() {
            this.count = this.count + 1
        }
    }
}
</script>

<style scoped></style>
