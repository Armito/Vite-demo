/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-17 21:31:39
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\Article\List\index.tsx
 */
import { defineComponent } from "vue"
import { useList } from './hooks'

export default defineComponent({
    name: 'ArticleList',

    setup: () => {
        const { articleList, checkDetail } = useList()

        return () => (
            <>
                {
                    articleList.value.map(article => (
                        <div
                            key={article.id}
                            onClick={() => checkDetail(article.id)}
                        >
                            {article.title}
                        </div>
                    ))
                }
            </>
        )
    }
})
