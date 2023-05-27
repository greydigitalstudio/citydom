import styles_phone from './phone.module.css'
/* Component imports */

import Image from 'next/image'



export default function Logo(props) {
  return (
    <a href={props.tel} className={styles_phone.phone}>
      <span className={styles_phone.phone__logo}>
        <Image
            src={'/phone-icon.svg'}
            alt=''
            width={12}
            height={12}
        />
      </span>
      <span className={styles_phone.phone__text}>{props.tel}</span>
    </a>
  )
}
