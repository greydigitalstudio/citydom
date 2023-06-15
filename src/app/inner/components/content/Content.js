'use client';
import React, { useState, useEffect } from 'react';
import Pin from './icons/pin.js';

import styles from './content.module.css'

const Content = (props) => {
    props = {
        item: {
            flatsCount: 550
        },
        flats: [

        ]
    }

    for (let i = 0; i < 10; i++) {
        props.flats.push([])
        for (let j = 0; j < 10; j++) {
            props.flats[i][j] = '1.8 млн'
        }
    }

    return (
        <div className={styles.content}>
            <div className={styles.content__wrapper}>
                <div className={styles.content__title}>
                    <Pin/>
                    ЖК “Приображенский”
                    <div className={styles.item__flatscount}>
                        {props.item.flatsCount} {
                    props.item.flatsCount % 100 < 20 && props.item.flatsCount % 100 > 10 ? ' квартир' : 
                    props.item.flatsCount % 10 === 1 ? ' квартира' :
                    props.item.flatsCount % 10 < 5 && props.item.flatsCount % 10 > 0 ? ' квартиры' :
                    ' квартир'
                    }
                        
                    </div>
                </div>
                <div className={styles.content__row_info}>
                    <div className={styles.content__row_info_item_light}>
                        4 кв. 2023 - 4 кв. 2024
                    </div>
                    <div className={styles.content__row_info_item}>
                        Ипотека от 5%*
                    </div>
                </div>

                <div className={styles.content__description}>
                    <div className={styles.content__description_title}>
                        Описание
                    </div>
                    <div className={styles.content__description_text}>
                    Высокий уровень вовлечения представителей целевой аудитории является четким доказательством простого факта: начало повседневной работы по формированию позиции однозначно определяет каждого участника как способного принимать собственные решения касаемо поэтапного и последовательного развития общества. Господа, сложившаяся структура организации создаёт предпосылки для инновационных методов управления процессами. Но диаграммы связей набирают популярность среди определенных слоев населения, а значит, должны быть ограничены исключительно образом мышления.
                    </div>
                </div>

                <div className={styles.content__flats}>
                    {
                        props.flats.map((row, index) => {
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

                <div className={styles.content__button}>
                    Скачать презентацию этого проекта
                </div>
            </div>
        </div>
    );
}

export default Content;
