<script lang="ts" setup name="ArTable">
import { TableProps } from 'element-plus/es/components/table/src/table/defaults'
import { TableColumnCtx } from 'element-plus/es/components/table/src/table-column/defaults'

type ArTableProps<T> = TableProps<T> & { columns: TableColumnCtx<T>[] }

const tableProps = defineProps<ArTableProps<any>>()
</script>

<template>
    <el-table v-bind="tableProps">
        <el-table-column v-for="col in columns" :key="col.id" v-bind="col" />
    </el-table>
</template>
