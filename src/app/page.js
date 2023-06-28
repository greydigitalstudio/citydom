'use client';

import styles from './page.module.css'
/* Component imports */
import Filter from './components/filter/Filter'
import Results from './components/results/Results'

import { useState } from 'react'

import Banner from './components/general/banner/Banner'



export default function Home() {

  function setFilters(f) {
    setFilter(f);
  }

  let [ filters, setFilter ] = useState({
    multilevel: true
  })

  let usedFilters = filters;

  function useFilters() {
    console.log(filters)
    usedFilters = filters;
  }

  return (
    <>
    <Banner/>
    <main className={`${styles.main} ${styles.center}`}>
      <Filter
        filters={filters}
        setFilters={setFilters}
        useFilters={useFilters}
      />
      <Results
        filters={usedFilters}
      />
    </main>
    </>
  )
}
