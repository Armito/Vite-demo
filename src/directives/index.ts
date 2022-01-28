import { App } from 'vue'

export const registerDirectives = (app: App<Element>) => {
    app.directive('focus', {
        mounted: (el) => {
            el.focus()
        }
    })
}
