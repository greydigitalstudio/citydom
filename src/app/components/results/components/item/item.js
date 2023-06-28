'use client';

import React, { useState, useRef } from 'react';
import styles from './item.module.css'

import Link from 'next/link'

// Icons
import Star from '../../icons/star'
import Angle from '../../icons/angle'
import CostIcon from '../../icons/cost'
import Pin from '../../icons/pin'

import CCTV from '../../icons/cctv'
import BesidePreSchool from '../../icons/BesidePreSchool'
import BesideSchool from '../../icons/BesideSchool'
import ClosedArea from '../../icons/ClosedArea'
import Parking from '../../icons/Parking'
import ProtectedArea from '../../icons/ProtectedArea'

function getDate(date) {
    let d = new Date(date);
    let day = d.getDate();
    if (day < 10) day = '0' + day;
    let month = d.getMonth() + 1;
    if (month < 10) month = '0' + month;
    let year = d.getFullYear();
    return `${day}.${month}.${year}`;
}

const Item = (props) => {
    let image = `https://files.citidom.com/${props.item.photos[0]?.name}`;
    if (!image)
        image = 'https://i.ibb.co/xqjdTP8/754678181959064.jpg';

    return (
        <div className={styles.item}>
            <Link href={`/inner?id=${props.item.id}`}>
                <div className={styles.item__in}>
                    
                    <div className={styles.item__uploaded}>
                        Внесён {getDate(new Date(props.item.createdAt))}
                    </div>

                    <img className={styles.item__img} src={image} alt="" />

                    <div className={styles.item__star}
                        style={{ display: "none" }}
                    >
                        <Star />
                    </div>

                    <div
                        style={{ display: "none" }}
                    className={styles.item__someinfo}>
                        <div className={styles.item__someleter}>
                            C
                        </div>
                        <img className={styles.item__img} src={image} alt="" />
                        <div className={styles.item__star}>
                            <Star />
                        </div>
                        <div className={styles.item__someinfo}>
                            <div className={styles.item__someleter}>
                                C
                            </div>
                            <div className={styles.item__somenumber}>
                                6,6
                            </div>
                        </div>
                    </div>
                        <div className={styles.item__cost}>
                            <div className={styles.item__angleLeft}>
                                <Angle />
                            </div>
                            <div className={styles.item__angleRight}>
                                <Angle />
                            </div>
                            от {props.item.minFlatPrice} ₽ &nbsp;
                            <CostIcon />
                        </div>
                        <div className={styles.item__row}>
                            <div></div>
                            <div className={styles.item__flatscount}>
                                {props.item.flatsCount} {
                                    props.item.flatsCount % 100 < 20 && props.item.flatsCount % 100 > 10 ? ' квартир' :
                                        props.item.flatsCount % 10 === 1 ? ' квартира' :
                                            props.item.flatsCount % 10 < 5 && props.item.flatsCount % 10 > 0 ? ' квартиры' :
                                                ' квартир'
                                }

                            </div>
                        </div>

                        <div className={styles.item__address}>
                            <Pin />
                            <div className={styles.item__address_text}>
                                {props.item.title}
                            </div>
                        </div>

                        <div className={styles.item__row}>
                            <div className={styles.item__icons}>
                                {props.item.isProtectedArea && <ProtectedArea />}
                                {props.item.hasBesideSchool && <BesideSchool />}
                                {props.item.isClosedArea && <ClosedArea />}
                                {(props.item.hasGroundParking || props.item.hasUndergroundParking || props.item.hasBesidePark) && <Parking />}
                                {props.item.hasCctv && <CCTV />}
                                {props.item.hasBesidePreSchool && <BesidePreSchool />}

                            </div>
                            <div className={styles.item__quarter}>
                                {props.item.endConstruction}
                            </div>
                        </div>
                        
                </div>
            </Link>
        </div>
    );
}

export default Item;
