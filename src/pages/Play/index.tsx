/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-15 22:39:41
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\Play\index.vue
*/
import { defineComponent } from "vue";
import Book from '@/components/Book/index'
import Father from '@/components/Father/index.vue'
import Slot, { SlotsProps } from '@/components/Slot/index.vue'
import { usePlay } from './hooks'

export default defineComponent({
    name: 'Play',

    setup: () => {
        const { count } = usePlay()

        return () => (
            <div>
                Just Play!
                <br />
                Enjoy Yourself!
                <br />
                <br />
                <Book />
                <Father />
                <Slot class="aaa" name="Pikachu" hobby={['game']}>
                    {{
                        header: ({ name, hobby }: SlotsProps) => [
                            <div>header</div>,
                            <div>{ name }</div>,
                            <div>{ hobby }</div>,
                        ],
                        footer: () => <div>footer</div>
                    }}
                </Slot>
                { count.value }
            </div>
        )
    }
})
