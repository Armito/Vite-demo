/*
 * @Author: Armito
 * @Date: 2022-03-10 19:36:38
 * @LastEditTime: 2022-03-15 22:06:20
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\types\types.ts
 */
export interface JumpRoute {
    label: string
    path: string
}

export interface Article {
    title: string
    id: number
}

export interface Book {
    id: string
    title: string
    price?: number
}

export type BookParams = Omit<Book, 'id'> & {
    id?: string
    success?: () => void
}
