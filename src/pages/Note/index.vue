<template>
    <el-row justify="center">
        <el-card class="box-card">
            <template #header>
                <div class="card-header">
                    <span>Note List</span>
                    <el-button class="button" type="text">
                        Operation button
                    </el-button>
                </div>
            </template>

            <template #default>
                <div v-for="o in 4" :key="o" class="text item">
                    {{ 'List item ' + o }}
                </div>
            </template>
        </el-card>
    </el-row>
</template>

<style scoped lang="less">
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}

.box-card {
    width: 480px;
}
</style>
