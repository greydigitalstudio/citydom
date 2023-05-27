'use client';

import styles from '../../../page.module.css'
import banner_styles from './banner.module.css'
import { usePathname } from 'next/navigation';
/* Component imports */
import Image from 'next/image';



export default function Banner(props) {
    const pathname = usePathname();
    return (
        <div className={`${banner_styles.banner} ${styles.center} ${pathname == '/' ? banner_styles.banner__small : banner_styles.banner__big}`}>
            <div className={banner_styles.banner__in}>
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
