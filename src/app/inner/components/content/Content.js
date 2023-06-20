'use client';
import React, { useState, useEffect } from 'react';
import Pin from './icons/pin.js';

import styles from './content.module.css'
  

const Content = (props) => {

    let section = props.section

    let data = props.data

    if(!data) data = {
        
    }
    let flats = []

    for (let i = 0; i < 10; i++) {
        flats.push([])
        for (let j = 0; j < 10; j++) {
            flats[i][j] = '1.8 млн'
        }
    }

    let layouts = []

    for (let i = 0; i < 20; i++) {
        layouts.push({
            cost: '2 940 000',
            area: '34.5',
        })
    }

    let [modal, setModal] = useState(false)

    function showModal() {
        setModal(true)
    }
    function closeModal() {
        setModal(false)
    }


    return (
        <div className={styles.content}>
            <div className={styles.content__wrapper}>
                <div className={styles.content__title}>
                    <Pin/>
                    {data.title}
                    <div className={styles.item__flatscount}>
                        {data.flatsCount} {
                        data.flatsCount % 100 < 20 && data.flatsCount % 100 > 10 ? ' квартир' : 
                        data.flatsCount % 10 === 1 ? ' квартира' :
                        data.flatsCount % 10 < 5 && data.flatsCount % 10 > 0 ? ' квартиры' :
                    ' квартир'
                    }
                        
                    </div>
                </div>
                <div className={styles.content__row_info}>
                    <div className={styles.content__row_info_item_light}>
                        {data.endConstruction}
                    </div>
                    <div className={styles.content__row_info_item}>
                        Ипотека от {data.mortgage}%*
                    </div>
                </div>

                <div className={styles.content__description}>
                    <div className={styles.content__description_title}>
                        Описание
                    </div>
                    <div className={styles.content__description_text}>
                        {data.description}
                    </div>
                </div>
                    { section === 'floats' &&
                        <div className={styles.content__flats}>
                    {
                        flats.map((row, index) => {
                            return <div className={styles.content__flats_row} key={index}>
                                <div className={styles.content__flats_wrapper}>
                                    <div className={index === 0 ? styles.content__flats_index_first  : styles.content__flats_index}>
                                    { 10 - index }
                                    </div>
                                    {
                                        row.map((item, index) => {
                                            return (
                                                <div className={styles.content__flats_item} key={index}>
                                                    { item }
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        })
                    }
                </div>
                    }
                    { section === 'layouts' &&
                    <div className={styles.content__layouts}>

                    {
                        layouts.map((item, index) => {
                            return (
                                <div className={styles.content__layout} key={index} onClick={ showModal }>
                                    <div className={styles.content__layout_wrapper}>
                                        <div className={styles.content__layout_image}>
                                            <img src="https://i.ibb.co/Dk13QcL/image-3.png" alt="" />
                                        </div>
                                        <div className={styles.content__flats_row}>
                                            <div className={styles.content__flats_text}>
                                                Цена от:
                                            </div>
                                            <div className={styles.content__flats_bdtext}>
                                                { item.cost } ₽
                                            </div>
                                        </div>
                                        <div className={styles.content__flats_row}>
                                            <div className={styles.content__flats_text}>
                                                Площадь:
                                            </div>
                                            <div className={styles.content__flats_bdtext}>
                                                { item.area } м²
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }

                    </div>
                    }

                <div className={styles.content__button}>
                    Скачать презентацию этого проекта
                </div>
            </div>
            { modal &&
            <div className={styles.content__modal}>
                <div className={styles.content__modal_wrapper}>
                    <div className={styles.content__modal_close} onClick={ closeModal }>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.5 1.5L14.5 14.5" stroke="white" stroke-width="2"/>
                        <path d="M14.5 1.5L1.5 14.5" stroke="white" stroke-width="2"/>
                        </svg>
                    </div>
                    <div className={styles.content__modal_content}>
                        <div className={styles.content__modal_image}>
                            <img src="https://i.ibb.co/jZF0pB2/image-4.png" alt="" />
                        </div>
                        <div className={styles.content__modal_info}>
                            <div className={styles.content__modal_title}>
                                ЖК «Краснолесье»
                            </div>
                            <div className={styles.content__modal_text}>
                                2 - комнатная
                            </div>
                            <div className={styles.content__modal_text}>
                                76.24 кв.м.
                            </div>
                            <div className={styles.content__modal_text}>
                                2-этаж
                            </div>
                            <div className={styles.content__modal_text}>
                                4-квартал 2022 года.
                            </div>
                            <div className={styles.content__modal_button}>
                                Купить со скидкой
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            }
        </div>
    );
}

export default Content;
