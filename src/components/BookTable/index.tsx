/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 21:39:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Comp\index.tsx
 */
import { defineComponent } from 'vue'
import { useBookTable } from './hooks'
import { Book } from '@/types/types'
import styles from './style.module.less'

export default defineComponent({
    name: 'BookTable',

    props: {
        author: {
            type: String,
            default: 'Armito'
        }
    },

    emits: ['check', 'edit'],

    setup: (props, context) => {
        const { author } = props

        const { 
            slots, 
            emit, 
            expose 
        } = context

        const { 
            tableData, 
            handleCheck, 
            handleEdit 
        } = useBookTable(props, emit)

        expose({ handleCheck })

        return () => (
            <>
                <div class={styles.header} v-marker>
                    {slots.header?.(author)}的书单
                </div>
                <el-table data={tableData.value}>
                    <el-table-column prop="id" label="id" width="180" />
                    <el-table-column prop="title" label="书名" width="180" />
                    <el-table-column prop="price" label="价格" />
                    <el-table-column fixed="right" label="操作" width="120">
                        {{
                            default: ({ row }: { row: Book }) => [
                                <el-button type="text" size="small" onClick={() => handleCheck(row.id)}>Check</el-button>,
                                <el-button type="text" size="small" onClick={() => handleEdit(row)}>Edit</el-button>
                            ]
                        }}
                    </el-table-column>
                </el-table>
                <div class={styles.footer}>
                    {slots.footer?.(props)}
                </div>
            </>
        )
    }
})
