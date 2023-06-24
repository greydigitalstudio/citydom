import styles from './page.module.css'
/* Component imports */
import Filter from './components/filter/Filter'
import Results from './components/results/Results'

import Banner from './components/general/banner/Banner'



export default function Home() {
  return (
    <>
    <Banner/>
    <main className={`${styles.main} ${styles.center}`}>
      <Filter />
      <Results />
    </main>
    </>
  )
}
