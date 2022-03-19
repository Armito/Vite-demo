/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-17 21:05:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\Play\index.vue
*/
import { defineComponent } from "vue";
import Book from '@/components/Book'
import Father from '@/components/Father'
import Slot from '@/components/Slot'
import Pass from "@/components/Pass"
import { usePlay } from './hooks'
import { SlotsProps } from '@/components/Slot/types'
import styles from './style.module.less'

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
                <Slot
                    class="aaa"
                    name="Pikachu"
                    hobby={['game']}
                    v-slots={{
                        header: ({ name, hobby }: SlotsProps) => [
                            <div>header</div>,
                            <div>{ name }</div>,
                            <div>{ hobby }</div>,
                        ],
                        footer: () => <div>footer</div>
                    }}
                />
                { count.value }
                <Pass
                    nameRenderer={
                        <el-progress 
                            percentage={84} 
                            format={(percent: number) => (percent === 100 ? 'Full' : `${percent}%`)}
                        />
                    }
                    effectRenderer={
                        <el-progress percentage={50} status="exception" />
                    }
                    attackRenderer={
                        (_percent) => [
                            <span>{_percent}</span>,
                            <el-progress percentage={_percent} status="warning" />
                        ]
                    }
                />
                <div class={styles.container1}>
                    Where there is a will, there is a way~
                </div>
                <div class={styles.container2}>
                    Where there is a will, there is a way~
                </div>
            </div>
        )
    }
})
