'use client';

import styles from '../../page.module.css'
import { usePathname } from 'next/navigation';
/* Component imports */
import Image from 'next/image';



export default function Banner(props) {
    const pathname = usePathname();
    return (
        <div className={`${styles.banner} ${styles.center} ${pathname == '/' ? styles.banner__small : styles.banner__big}`}>
            <div className={styles.banner__in}>
                <Image
                    src={'/banner.jpg'}
                    alt='Banner'
                    width={1116}
                    height={566}
                />
            </div>
        </div>
    )
}
