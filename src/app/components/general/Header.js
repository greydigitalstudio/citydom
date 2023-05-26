import styles from '../../page.module.css'
/* Component imports */

import Link from 'next/link'

import Logo from './Logo'
import Phone from './Phone'



export default function Header() {
  return (
    <header className={`${styles.header} ${styles.center}`}>
      <div className={styles.header__left}>
        <Logo />
        <Phone tel="+ 8 (800) 888 - 88 - 88" />
      </div>
      <div className={styles.header__right}>
        <Link href="/inner">Внутренняя страница</Link>
      </div>
    </header>
  )
}
