/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-17 21:45:10
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\index.tsx
 */
import { defineComponent } from "vue"
import { usePage } from './hooks'

export default defineComponent({
    name: '/',

    setup: () => {
        const { jumpBtns, jump } = usePage()

        return () => (
            <el-space wrap>
                {
                    jumpBtns.value.map(btn => (
                        <el-button 
                            key={btn.label} 
                            type="primary" 
                            onClick={() => jump(btn.path)}
                        >
                            {btn.label}
                        </el-button>
                    ))
                }
            </el-space>
        )
    }
})
