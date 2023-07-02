'use client';

import MediaQuery from 'react-responsive'
import React, { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './footer.module.css'

import Image from 'next/image';
import Logo from '../logo/Logo'

// Icons
import Vk from './icons/Vk'
import Instagram from './icons/Instagram'
import Whatsup from './icons/Whatsup';
import Telegram from './icons/Telegram';
import Ok from './icons/Ok';
import Viber from './icons/Viber';

const Footer = () => {

    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    })

    return (
        <div className={styles.footer}>
            <div className={styles.footer__in}>
                <div className={styles.footer__logo}><Logo 
                width={212}
                height={66}
                /></div>
                { mounted && <MediaQuery minWidth={768}>
                <div className={styles.footer__section}>
                    <div className={styles.footer__column}>
                        <div className={styles.footer__title}> Контакты </div>

                        <div className={styles.footer__info}>
                            <a href="tel:+73452967078" className={styles.footer__text}> +7 3452 967-078 </a>
                            <div className={styles.footer__text}> email@email.ru </div> 
                            <div className={styles.footer__text}> Тюмень, ул. Николая Гондатти 3/2 </div>
                        </div>

                        <div className={styles.footer__icons}>
                            <Vk />
                            <Telegram />
                            <Instagram style="display: none;" />
                            <Whatsup />
                            <Viber />
                            <Ok/>
                        </div>
                    </div>
                    <div className={styles.footer__column}
                        style={{ display: "none" }}
                    >
                        <div className={styles.footer__title}> Информация </div>

                        <div className={styles.footer__text}> О нас </div>
                        <div className={styles.footer__text}> Новостройки </div>
                        <div className={styles.footer__text}> Акции </div>
                        <div className={styles.footer__text}> Новые поступления </div>
                        <div className={styles.footer__text}> Цены </div>
                    </div>
                </div>
                </MediaQuery> }
                {
                    mounted && <MediaQuery maxWidth={767}>
                        <div className={styles.footer__section}>
                    <div className={styles.footer__column}>
                        <div className={styles.footer__title}> Контакты </div>
                        
                        <div className={styles.footer__text}> Москва, пр. Строителей, д. 150 </div>
                        <div className={styles.footer__text}> 8(800) 888-88088 </div>
                        <div className={styles.footer__text}> email@email.ru </div>
                        
                    </div>
                    <div className={styles.footer__column}
                        style={{ display: "none" }}
                    >
                        <div className={styles.footer__title}> Информация </div>

                        <div className={styles.footer__text}> О нас </div>
                        <div className={styles.footer__text}> Новостройки </div>
                        <div className={styles.footer__text}> Акции </div>
                        <div className={styles.footer__text}> Новые поступления </div>
                        <div className={styles.footer__text}> Цены </div>
                    </div>
                    <div className={styles.footer__icons}> 
                            <Vk />
                            <Telegram />
                            <Instagram style="display: none;" />
                            <Whatsup />
                            <Viber />
                            <Ok/>
                        </div>
                        
                </div>
                    </MediaQuery>}
            </div>
        </div>
    );
}

export default Footer;
