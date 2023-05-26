import styles from '../../page.module.css'
/* Component imports */

import Link from 'next/link'
import Image from 'next/image'



export default function Logo(props) {
  return (
    <a href={props.tel} className={styles.phone}>
      <span className={styles.phone__logo}>
        <Image
            src={'/phone-icon.svg'}
            alt=''
            width={12}
            height={12}
        />
      </span>
      <span className={styles.phone__text}>{props.tel}</span>
    </a>
  )
}
