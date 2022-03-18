import { defineComponent, PropType, ref } from 'vue'
import { JSXRenderer, AttackRenderer } from './types'

export default defineComponent({
    name: 'Pass',

    props: {
        nameRenderer: {
            type: Object as PropType<JSXRenderer>,
            default: () => null
        },

        effectRenderer: {
            type: Object as PropType<JSXRenderer>,
            default: () => null
        },

        attackRenderer: {
            type: Function as PropType<AttackRenderer>,
            default: () => () => null
        }
    },
    
    setup: (props) => {
        const { nameRenderer, effectRenderer, attackRenderer } = props

        const attack = ref(30)

        return () => (
            <div>
                <div>name: {nameRenderer}</div>
                <div>effect: {effectRenderer}</div>
                <div>attack: {attackRenderer(attack.value)}</div>
            </div>
        )
    }
})
