<script setup lang="ts" name="homePage">
import { usePage } from './hooks'

const { jumpBtns, jump } = usePage()
</script>

<template>
    <el-space wrap>
        <div v-for="btn in jumpBtns" :key="btn.label">
            <el-button type="primary" @click="jump(btn.path)">
                {{ btn.label }}
            </el-button>
        </div>
    </el-space>
</template>

<style scoped>
a {
    color: #42b983;
}

label {
    margin: 0 0.5em;
    font-weight: bold;
}

code {
    background-color: #eee;
    padding: 2px 4px;
    border-radius: 4px;
    color: #304455;
}
</style>
