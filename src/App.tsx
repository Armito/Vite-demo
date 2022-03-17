/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-17 21:36:53
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\App.tsx
 */
import { defineComponent } from "vue"

export default defineComponent({
    name: 'App',

    setup: () => {
        return () => (
            <el-container>
                <el-header>Vue3 Research</el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        )
    }
})
