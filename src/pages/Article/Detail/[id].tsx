/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-17 21:33:19
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\Article\Detail\[id].tsx
 */
import { defineComponent } from "vue"
import { useRoute } from 'vue-router'

export default defineComponent({
    name: 'ArticleDetail',

    setup: () => {
        const {
            params: { id: articleId }
        } = useRoute()

        return () => <div>Detail: {articleId}</div>
    }
})
