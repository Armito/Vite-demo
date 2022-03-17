/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-17 21:13:17
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\PlayThree\index.tsx
 */
import { defineComponent } from 'vue'
import Vue1 from '@/components/VueExample/1.vue2.vue'
import Vue2 from '@/components/VueExample/2.vue3-1.vue'
import Vue3 from '@/components/VueExample/3.vue3-2.vue'
import Vue4 from '@/components/VueExample/4.vue3-3'

export default defineComponent({
    name: 'PlayThree',

    setup: () => {

        return () => [
            <Vue1 />,
            <Vue2 />,
            <Vue3 />,
            <Vue4 />
        ]
    }
})
