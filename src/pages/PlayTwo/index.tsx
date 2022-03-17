/*
 * @Author: your name
 * @Date: 2022-03-10 19:36:38
 * @LastEditTime: 2022-03-17 21:10:52
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \Vite-demo\src\pages\PlayTwo\index.tsx
 */
import { defineComponent, ref } from 'vue'
import { interval } from 'rxjs'
import { filter, debounceTime, delay } from 'rxjs/operators'
import moment from 'moment'

export default defineComponent({
    name: 'PlayTwo',

    setup: () => {
        const fromNow = ref()

        interval(1000).subscribe(() => {
            fromNow.value = moment('2022-03-10 16:30:00').fromNow()
        })

        const a = ref(0)
        const b = ref(0)
        const c = ref(0)
        const d = ref(0)

        const timeA$ = interval(1000)
        timeA$.subscribe(x => {
            a.value = x
        })

        const timeB$ = timeA$.pipe(
            filter(num => {
                return num % 2 != 0 && num % 3 != 0 && num % 5 != 0 && num % 7 != 0
            })
        )
        timeB$.subscribe(x => {
            b.value = x
        })

        const timeC$ = timeB$.pipe(debounceTime(3000))
        timeC$.subscribe(x => {
            c.value = x
        })

        const timeD$ = timeC$.pipe(delay(2000))
        timeD$.subscribe(x => {
            d.value = x
        })

        return () => (
            <div>
                <div>{fromNow.value}</div>
                <div>
                    <span>{a.value},</span>
                    <span>{b.value},</span>
                    <span>{c.value},</span>
                    <span>{d.value}</span>
                </div>
            </div>
        )
    }
})
