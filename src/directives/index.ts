import { App } from 'vue'
import { vFocus } from './focus'
import { vMarker } from './marker'

const directivesArray = [
    {
        name: 'focus',
        directive: vFocus
    },
    {
        name: 'marker',
        directive: vMarker
    }
]

export default {
    install: (app: App<Element>) => {
        directivesArray.forEach(d => {
            app.directive(d.name, d.directive)
        })
    }
}
