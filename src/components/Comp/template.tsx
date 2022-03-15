import { CompProps } from './types'
import styles from './style.module.less'

const Comp = ({ onIncrement, count, author }: CompProps) => (
    <div class={styles.comp} v-Marker onClick={onIncrement}>
        comp {count}
        <div>inner: {author}</div>
    </div>
)

export default Comp
