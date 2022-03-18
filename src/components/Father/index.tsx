/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-17 21:08:23
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Father\index.vue
*/
import { defineComponent } from 'vue'
import Count from '@/components/Count'
import { useFather } from './hooks'

export default defineComponent({
    name: 'Father',

    setup: () => {
        const { countRef, msg, plus } = useFather()

        return () => (
            <>
                <Count ref={countRef} msg={msg.value} />
                <div>
                    <el-button onClick={plus}>+++</el-button>
                </div>
            </>
        )
    }
})
