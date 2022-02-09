import { ObjectDirective } from 'vue'
import VueLogo from '@/assets/logo.png'

export const vMarker: ObjectDirective = {
    mounted: (el: HTMLElement) => {
        el.style.backgroundImage = `url(${VueLogo})`
        el.style.backgroundPosition = 'center'
        el.style.backgroundSize = 'contain'
    }
}