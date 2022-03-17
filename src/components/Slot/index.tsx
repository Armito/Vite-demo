/*
 * @Author: Armito
 * @Date: 2022-03-09 21:37:08
 * @LastEditTime: 2022-03-17 20:50:57
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Slot\index.vue
*/
import { defineComponent, PropType } from 'vue'
import { useSlot } from './hooks'
import { Hobby } from './types'

export default defineComponent({
    name: 'Slot',

    props: {
        name: {
            type: String,
            default: 'Armito'
        },

        hobby: {
            type: Array as PropType<Hobby>,
            default: () => []
        }
    },

    setup: (props, context) => {
        const { name } = props

        const { slots } = context

        const { age } = useSlot()

        return () => (
            <div>
                { name }:{ age.value }
                <div>
                    {slots.header?.(props)}
                </div>
                <div>
                    {slots.body?.(props)}
                </div>
                <div>
                    {slots.footer?.(props)}
                </div>
            </div>
        )
    }
})
