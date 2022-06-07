/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 21:39:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Comp\index.tsx
 */
import { defineComponent } from 'vue'
import { ArTable } from '@/common/ArComponent'
import ArTable2 from '@/common/Ar/ArTable/index.vue'
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
            slots: {
                header: slotHeader,
                footer: slotFooter
            }, 
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
                    {slotHeader?.(author)}的书单
                </div>
                <ArTable 
                    data={tableData.value} 
                    columns={tableColumns} 
                    stripe 
                    border 
                />
                <div class={styles.footer}>
                    {slotFooter?.(props)}
                </div>
            </>
        )
    }
})
