/*
 * @Author: Armito
 * @Date: 2022-03-10 19:36:38
 * @LastEditTime: 2022-03-17 21:26:36
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\Note\index.tsx
 */
import { defineComponent, ref, reactive, watch } from "vue"
import { ArForm } from '@/common/ArComponent'
import { FormComponentType } from '@/common/ArComponent/ArForm/types'
import styles from './style.module.less'

export default defineComponent({
    name: 'Note',

    setup: () => {
        const model = reactive({
            title: ''
        })

        const formItems = ref([
            {
                prop: 'title',
                label: '123',
                formComponentType: FormComponentType.Text
            }
        ])

        watch(model, () => {
            console.log(model)
        })

        return () => (
            <el-row justify="center">
                <el-card 
                    class={styles['box-card']} 
                    v-slots={{
                        header: () => (
                            <>
                                <span>Note List</span>
                                <el-button class={styles['card-header']} type="text">
                                    Operation button
                                </el-button>
                            </>
                        ),
                        default: () => [
                            Array(4).fill('O-M').map((o, i) => 
                                <div class={[styles.item, styles.text]} key={i}>
                                    { 'List item ' + o }
                                </div>
                            ),
                            <ArForm model={model} labelWidth="120px" formItems={formItems.value} />
                        ]
                    }}
                />
            </el-row>
        )
    }
})
