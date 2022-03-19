/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-02-10 20:45:02
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Count\useCount.ts
 */
import { CountPadProps, PropsValueTypeOfMsg } from './types'
import { useCount } from '@/hooks/useCount'

export const useCountPad = (propsWithDefaults: CountPadProps) => {
    const { count, increment, decrement, double, divide } = useCount()

    const handleMsg = (msg: PropsValueTypeOfMsg) => msg + '4'

    return {
        count,
        increment,
        decrement,
        double,
        divide,
        message: propsWithDefaults.msg,
        handleMsg
    }
}
