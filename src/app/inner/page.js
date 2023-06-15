import Filter from '../inner/components/filter/Filter'
import Privilege from './components/privilege/Privilege'
import Consultation from './components/consultation/Consultation'
import Content from './components/content/Content'

import styles from './page.module.css'
/* Component imports */


export default function Test() {
  return (
    <main className={`${styles.main} ${styles.center}`}>
      <div className={styles.left}>
        <Filter />
        <Privilege />
      </div>
      <div className={styles.content}>
        <Content />
      </div>
      <div className={styles.left}>
        <Consultation />
      </div>

    </main>
  )
}
