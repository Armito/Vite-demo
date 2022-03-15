/*
 * @Author: Armito
 * @Date: 2022-03-15 19:28:31
 * @LastEditTime: 2022-03-15 22:24:09
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\components\Comp\template.tsx
 */
import styles from './style.module.less'
import { CompProps } from './types'
import { Book } from '@/types/types'

const Comp = ({ author, tableData, handleCheck, handleEdit }: CompProps) => (
    <>
        <div class={styles.comp} v-marker>{author}</div>
        <el-table data={tableData}>
            <el-table-column prop="id" label="id" width="180" />
            <el-table-column prop="title" label="书名" width="180" />
            <el-table-column prop="price" label="价格" />
            <el-table-column fixed="right" label="操作" width="120">
                {{
                    default: ({ row }: { row: Book }) => [
                        <el-button type="text" size="small" onClick={handleCheck}>Check</el-button>,
                        <el-button type="text" size="small" onClick={() => handleEdit(row)}>Edit</el-button>
                    ]
                }}
            </el-table-column>
        </el-table>
    </>
)

export default Comp
