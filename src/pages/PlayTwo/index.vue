<script setup lang="ts">
import { ref } from 'vue'
import { interval } from 'rxjs'
import { filter, debounceTime, delay } from 'rxjs/operators'
import moment from 'moment'

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
</script>

<template>
    <div>
        <div>{{ fromNow }}</div>
        <div>
            <span>{{ a }},</span>
            <span>{{ b }},</span>
            <span>{{ c }},</span>
            <span>{{ d }}</span>
        </div>
    </div>
</template>
