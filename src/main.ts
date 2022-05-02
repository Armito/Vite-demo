/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-04-09 10:54:17
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\main.ts
 */
import { createApp } from 'vue'
import App from './App'
import router from './router'
import { createPinia } from 'pinia'
import registerDirectives from './directives'
import elementPlus from 'element-plus'
import './styles/global.less'
import 'element-plus/theme-chalk/index.css'

createApp(App)
    .use(router)
    .use(createPinia())
    .use(registerDirectives)
    .use(elementPlus)
    .mount('#app')
