"use client";

import styles_logo from './logo.module.css'
/* Component imports */
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'



export default function Logo() {

  let [size, setSize] = useState('desktop')

  useEffect(() => {
    if(window.innerWidth < 768)
      setSize('mobile')
    window.addEventListener('resize', () => {
      if(window.innerWidth < 768)
        setSize('mobile')
      else
        setSize('desktop')
    })
  }, [])

  return (
    <Link href="/" className={styles_logo.logo}>
      {
        size == 'desktop' &&
        <Image className={styles_logo.logo__img}
        src={'/logo.png'}
        alt='Logo'
        width={174}
        height={53}
      />
      }
      { 
      size == 'mobile' &&
        <Image className={styles_logo.logo__img}
          src={'/logo.png'}
          alt='Logo'
          width={106}
          height={34}
        />
      }
      
    </Link>
  )
}