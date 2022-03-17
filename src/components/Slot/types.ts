/*
 * @Author: Armito
 * @Date: 2022-03-17 20:30:44
 * @LastEditTime: 2022-03-17 20:37:37
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Slot\types.ts
 */
export interface SlotsProps {
    name: string
    hobby: string[]
}

export type Hobby = TypeOfProperty<SlotsProps, 'hobby'>
