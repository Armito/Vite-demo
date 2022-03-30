/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-17 21:02:28
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Count\index.vue
*/
import { defineComponent } from 'vue'
import { useCountPad } from './hooks'

export default defineComponent({
    name: 'CountPad',

    props: {
        msg: {
            type: String,
            default: 'Curisu'
        }
    },

    setup: (props, context) => {
        const { expose } = context

        const { 
            count,
            increment,
            decrement,
            double,
            divide,
            message,
            handleMsg
        } = useCountPad(props)

        expose({...useCountPad(props)})

        return () => (
            <>
                <el-card 
                    v-slots={{
                        header: () => <div v-marker>加减乘除</div>,
                        default: () => [
                            <div>{message} count is: {count.value}</div>,
                            <div>{handleMsg(props.msg)} count is: {count.value}</div>,
                            <div>{props.msg} count is: {count.value}</div>
                        ]
                    }} 
                />
                <el-button type="success" onClick={increment}>+++</el-button>
                <el-button type="danger" onClick={decrement}>---</el-button>
                <el-button type="warning" onClick={double}>x2</el-button>
                <el-button type="default" onClick={divide}>/2</el-button>
            </>
        )
    }
})
