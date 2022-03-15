/*
 * @Author: Armito
 * @Date: 2022-02-13 12:15:50
 * @LastEditTime: 2022-03-15 22:00:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\utils\TS.ts
 */
export interface Obj {
    name: string
    age: number
    hobby?: string[]
}

export type ObjKeys = keyof Obj

// Partial: 可选
export type ObjOptional = Partial<Obj>

// Required: 必填
export type ObjRequired = Required<Obj>

// Readonly: 只读
export type ObjReadonly = Readonly<Obj>

// Record: A: B
export type ObjRecord = Record<'info', Obj>

// Pick: 挑选A类型的B属性
export type ObjPickName = Pick<Obj, 'name'>

// Omit: 剔除A类型中B属性
export type ObjOmit = Omit<Obj, 'hobby'>

// Exclude: 剔除A中能赋值给B的类型
export type ObjExclude = Exclude<'gender' | 'age', ObjKeys>

// Extract: 选出A中能赋值给B的类型
export type ObjExtract = Extract<'gender' | 'age', ObjKeys>

// NonNullable: 选出A中能赋值给B的类型
export type ObjNonNullable = NonNullable<ObjKeys | null | undefined>

interface Fn {
    (a: number, b: number): number
}

// FnParameters: 获取一个函数类型的参数类型元组
export type FnParameters = Parameters<Fn>

// ReturnType: 获取一个函数类型的返回值类型
export type FnReturnType = ReturnType<Fn>

export type Me = 'Armito'

// Uppercase: 将一个字符串类型，转变为其对应的大写类型
export type ArmitoUppercase = Uppercase<Me>

// Lowercase: 将一个字符串类型，转变为其对应的小写类型
export type ArmitoLowercase = Lowercase<ArmitoUppercase>

// Capitalize: 将一个字符串类型，转变为其对应的首字母大写的类型
export type ArmitoCapitalize = Capitalize<ArmitoLowercase>

// Uncapitalize: 将一个字符串类型，转变为其对应的首字母小写的类型
export type ArmitoUncapitalize = Uncapitalize<ArmitoCapitalize>
