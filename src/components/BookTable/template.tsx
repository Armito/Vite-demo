/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 22:24:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\BookTable\template.tsx
 */
import styles from './style.module.less'
import { BookTableTemplateProps } from './types'
import { Book } from '@/types/types'

export const useTemplate = (bookTableTemplateProps: BookTableTemplateProps) => {
    const {
        context: { slots },
        author, 
        tableData, 
        handleCheck, 
        handleEdit 
    } = bookTableTemplateProps

    return (
        <>
            <div class={styles.header} v-marker>
                {slots.header?.(bookTableTemplateProps)}的书单
            </div>
            <el-table data={tableData}>
                <el-table-column prop="id" label="id" width="180" />
                <el-table-column prop="title" label="书名" width="180" />
                <el-table-column prop="price" label="价格" />
                <el-table-column fixed="right" label="操作" width="120">
                    {{
                        default: ({ row }: { row: Book }) => [
                            <el-button type="text" size="small" onClick={() => handleCheck(row.id)}>Check</el-button>,
                            <el-button type="text" size="small" onClick={() => handleEdit(row)}>Edit</el-button>
                        ]
                    }}
                </el-table-column>
            </el-table>
            <div class={styles.footer}>
                {slots.footer?.(bookTableTemplateProps)}
            </div>
        </>
    )
}
