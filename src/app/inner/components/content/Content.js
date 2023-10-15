'use client';
import React, { useState, useEffect } from 'react';
import Pin from './icons/pin.js';

import MediaQuery from 'react-responsive'
import styles from './content.module.css'


const Content = (props) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    let section = props.section

    let data = props.data
    let house = props.house
    let porche = props.porche;
    let layouts = props.layouts.filter(item => item.house.title === house.title)

    const [modalLayout, setModalLayout] = useState(null)
    let [modal, setModal] = useState(false)


    if (!data) data = {

    }
    let flats = []

    function price(price) {
        if (price == "0") return ''
        return (price / 1000000).toFixed(1) + ' млн'
    }

    while (!house.porches[porche]) porche--

    for (let i = 0; i < house.porches[porche].storeys.length; i++) {
        flats.push({
            number: house.porches[porche].storeys[i].number,
            flats: []
        })
        for (let j = 0; j < house.porches[porche].storeys[i].flats.length; j++) {
            flats[i].flats[j] = price(house.porches[porche].storeys[i].flats[j].price)
        }
    }


    function showModal({ target }) {
        while (!target.id) {
            target = target.parentNode
        }
        let layoutId = target.id.split('-')[1]
        let layout = layouts.filter(item => item.id === parseInt(layoutId))[0]
        setModalLayout(layout)
        setModal(true)
    }

    function closeModal() {
        setModal(false)
    }

    let maxCount = 0;

    return (
        <div className={styles.content}>
            {mounted && <MediaQuery minWidth={768}>
            </MediaQuery>
            }
            <div className={styles.content__wrapper}>
                <div className={styles.content__title}>
                    {/* <Pin /> */}
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
                        {data.displayDescription}
                        {
                            !data.descriptionOpened &&
                            <div className={styles.content__description_opener} onClick={props.openDescription}>
                                Показать ещё
                            </div>
                        }
                    </div>
                </div>
                {section === 'floats' &&
                    <div className={styles.content__flats}>
                        {
                            flats.map((row, index) => {
                                maxCount < row.flats.length ? maxCount = row.flats.length : maxCount = maxCount;
                            })
                        }
                        {
                            flats.map((row, index) => {
                                return <div className={styles.content__flats_row} key={index}>
                                    <div className={styles.content__flats_wrapper} style={{ gridTemplateColumns: `repeat(${maxCount + 1}, 80px)` }}>
                                        <div className={index === 0 ? styles.content__flats_index_first : styles.content__flats_index}>
                                            {row.number}
                                        </div>
                                        {
                                            row.flats.map((item, index) => {
                                                return (
                                                    <div className={styles.content__flats_item} key={index} id={"layout-19193"} onClick={showModal}>
                                                        {item}
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
                {section === 'layouts' &&
                    <div className={styles.content__layouts}>

                        {
                            layouts.map((item, index) => {
                                return (
                                    <div className={styles.content__layout} id={"layout-" + item.id} key={index} onClick={showModal}>
                                        <div className={styles.content__layout_wrapper}>
                                            <div className={styles.content__layout_image}>
                                                <img src={"https://files.citidom.com/" + item.layout} alt="" />
                                            </div>
                                            <div className={styles.content__flats_row}>
                                                <div className={styles.content__flats_text}>
                                                    Цена от:
                                                </div>
                                                <div className={styles.content__flats_bdtext}>
                                                    {item.price} ₽
                                                </div>
                                            </div>
                                            <div className={styles.content__flats_row}>
                                                <div className={styles.content__flats_text}>
                                                    Площадь:
                                                </div>
                                                <div className={styles.content__flats_bdtext}>
                                                    {item.spaceTotal} м²
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
            {modal &&
                <div className={styles.content__modal}>
                    <div className={styles.content__modal_wrapper}>
                        <div className={styles.content__modal_close} onClick={closeModal}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.5 1.5L14.5 14.5" stroke="white" stroke-width="2" />
                                <path d="M14.5 1.5L1.5 14.5" stroke="white" stroke-width="2" />
                            </svg>
                        </div>
                        <div className={styles.content__modal_content}>
                            <div className={styles.content__modal_image}>
                                <img src={"https://files.citidom.com/" + modalLayout.layout} alt="" />
                            </div>
                            <div className={styles.content__modal_info}>
                                <div className={styles.content__modal_title}>
                                    {modalLayout.estate.title}
                                </div>
                                <div className={styles.content__modal_text}>
                                    {modalLayout.rooms} - комнатная
                                </div>
                                <div className={styles.content__modal_text}>
                                    {modalLayout.spaceTotal} кв.м.
                                </div>
                                <div className={styles.content__modal_text}>
                                    {modalLayout.storey.number}-этаж
                                </div>
                                <div className={styles.content__modal_text}>
                                    {modalLayout.house.quarter}-квартал {modalLayout.house.year} года.
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
