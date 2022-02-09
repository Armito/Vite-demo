import { ObjectDirective } from 'vue'

export const vFocus: ObjectDirective = {
    mounted: (el: HTMLElement) => {
        el.focus()
    }
}