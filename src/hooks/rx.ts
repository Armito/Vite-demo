import { from } from 'rxjs'
import { tap } from 'rxjs/operators'

export const useRx = () => {
    const p = new Promise((resovle, reject) => {
        setTimeout(() => {
            const r = Math.random() * 10
            if (r > 5) {
                resovle(r)
            } else {
                reject(r)
            }
        }, 1000)
    })

    return from(p)
        .pipe(tap(x => console.log('tap:', x)))
        .subscribe({
            next: x => console.log('next:', x)
        })
}
