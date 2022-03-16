/*
 * @Author: Armito
 * @Date: 2022-03-09 21:37:08
 * @LastEditTime: 2022-03-15 22:05:07
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\types\lib.d.ts
 */
interface Window {
    helloWorld: () => void
}

// 获取接口中指定属性的类型
declare type TypeOfValue<T, K extends keyof T> = T[K]

// 将接口中的指定类型变为可选
declare type PropertyToPartial<T, K extends keyof T> = Omit<T, K> & {
    [P in K]?: T[P]
}

// 给接口增加一个指定属性
declare type AddProperty<T, K extends string | symbol, U> = K extends keyof T
    ? T
    : T & { [P in K]: U }
