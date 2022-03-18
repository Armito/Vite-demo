/*
 * @Author: Armito
 * @Date: 2022-02-10 19:51:46
 * @LastEditTime: 2022-03-15 22:11:06
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\stores\bookStore\index.ts
 */
import { defineStore } from 'pinia'
import { useBook } from '@/hooks/useBook'

export const useBookStore = defineStore('book', useBook)
