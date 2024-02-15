'use client';
import MediaQuery from 'react-responsive'
import styles from './page.module.css'
/* Component imports */
import Filter from './components/filter/Filter'
import Results from './components/results/Results'
import { useRouter } from 'next/navigation';
import { useState } from 'react'

import Banner from './components/general/banner/Banner'



export default function Home() {

  function setFilters(f) {
    setFilter(f);
  }
  const router = useRouter();
  let [ filters, setFilter ] = useState({
    multilevel: false
  })
  
  let [ usedFilters, setUsedFilters ] = useState({...filters})

  function useFilters() {
    setUsedFilters({...filters})
  }

  return (
    <>
      <MediaQuery minWidth={768}>
        <Banner/>
      </MediaQuery>
      <main className={`${styles.main} ${styles.center}`}>
        <Filter
          filters={filters}
          setFilters={setFilters}
          useFilters={useFilters}
        />
        <Results
          filters={usedFilters}
          router={router}
        />
      </main>
    </>
  )
}
