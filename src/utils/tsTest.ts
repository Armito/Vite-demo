// export type Test<T> = T extends number ? 1 : 2
// export type res = Test<1 | 'a'>

// export type Test<T> = T extends true ? 1 : 2
// export type res = Test<boolean>

// export type Test<T> = T extends true ? 1 : 2
// export type res = Test<any>

export type Test<T> = T extends true ? 1 : 2
export type res = Test<never>
