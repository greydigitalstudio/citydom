import styles from './page.module.css'
/* Component imports */
import Filter from './components/filter/Filter'
import Results from './components/results/Results'




export default function Home() {
  return (
    <main className={`${styles.main} ${styles.center}`}>
      <Filter />
      <Results />
    </main>
  )
}
