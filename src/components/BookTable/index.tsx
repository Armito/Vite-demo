/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 21:39:54
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Comp\index.tsx
 */
import { defineComponent } from 'vue'
import Templ from './template'
import { useBookTable } from './hooks'

export default defineComponent({
    name: 'BookTable',

    props: {
        author: {
            type: String,
            default: 'Armito'
        }
    },

    setup(props, context) {
        const { 
            tableData, 
            handleCheck, 
            handleEdit 
        } = useBookTable(props, context)

        return () => (
            <Templ 
                author={props.author} 
                tableData={tableData.value} 
                handleCheck={handleCheck} 
                handleEdit={handleEdit} 
            />
        )
    }
})
