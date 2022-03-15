import { CompProps } from './types'
import styles from './index.module.less'

const Comp = ({ onIncrement, count, author }: CompProps) => (
    <div class={styles.comp} onClick={onIncrement}>
        comp {count}
        <div>inner: {author}</div>
    </div>
)

export default Comp
