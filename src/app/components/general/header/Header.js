import header_styles from './header.module.css'
import styles from '../../../page.module.css'
/* Component imports */

import Link from 'next/link'

import Logo from '../logo/Logo'
import Phone from '../phone/Phone'



export default function Header() {
  return (
    <header className={`${header_styles.header} ${styles.center}`}>
      <div className={header_styles.header__left}>
        <Logo />
        <Phone tel="+7 (3452) 967-048" />
      </div>
      <div className={header_styles.header__right}>
        {/* <Link href="/inner">Внутренняя страница</Link> */}
      </div>
    </header>
  )
}
