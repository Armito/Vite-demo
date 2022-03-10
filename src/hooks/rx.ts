import { ref } from 'vue'
import { interval } from 'rxjs'
import { tap, map, filter } from 'rxjs/operators'

export const useRx = () => {
    const count = ref<number>(0)

    const subscriber = interval(500)
        .pipe(
            map(() => Math.random() * 10),
            filter(x => x > 3),
            tap(x => {
                count.value = x
            })
        )
        .subscribe({
            error: console.warn
        })

    return {
        count,
        subscriber
    }
}
