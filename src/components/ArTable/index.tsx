import { defineComponent, PropType } from 'vue'
import TableProps from 'element-plus/es/components/table/src/table/defaults'

interface TableColumnSlot {
    slots?: {
        default: (data: any) => JSX.Element | null
        header?: (data: any) => JSX.Element | null
    }
}

const ArTable = defineComponent({
    props: {
        ...TableProps,

        columns: {
            type: Array as PropType<(any & TableColumnSlot)[]>,
            required: true
        }
    },

    setup: props => {
        const { columns, ...tableProps } = props

        return () => (
            <el-table {...tableProps}>
                {columns.map(columnProps => <el-table-column {...columnProps} v-slots={columnProps.slots} />)}
            </el-table>
        )
    }
})

export default ArTable
