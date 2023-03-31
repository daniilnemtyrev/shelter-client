import { Counter } from 'src/entities/Counter'
import styles from './MainPage.module.scss'

function MainPage() {
    return (
        <div className={styles.main}>
            <Counter />
        </div>
    )
}

export default MainPage
