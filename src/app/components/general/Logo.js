import styles from '../../page.module.css'
/* Component imports */

import Link from 'next/link'
import Image from 'next/image'



export default function Logo() {
  return (
    <Link href="/" className={styles.header__logo}>
      <Image
        src={'/logo.png'}
        alt='Logo'
        width={173}
        height={53}
      />
    </Link>
  )
}
