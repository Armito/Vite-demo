/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 21:39:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Comp\index.tsx
 */
import { defineComponent } from 'vue'
import ArTable from '@/components/ArTable/index'
import { useBookTable } from './hooks'
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
            tableColumns
        } = useBookTable(props, emit)

        expose({...useBookTable(props, emit)})

        return () => (
            <>
                <div class={styles.header} v-marker>
                    {slots.header?.(author)}的书单
                </div>
                <ArTable data={tableData.value} columns={tableColumns} />
                <div class={styles.footer}>
                    {slots.footer?.(props)}
                </div>
            </>
        )
    }
})
