'use client';

import React, { useState, useRef, useEffect } from 'react';
import styles from './item.module.css'

import Link from 'next/link'
import MediaQuery from 'react-responsive'

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

const getChess = async (id) => {
    let res = await fetch(`https://tyumen.citidom.com/housing-estate/${id}/chess`);
    res = await res.json();
    return res
}

const Item = (props) => {
    let image = `https://files.citidom.com/${props.item.photos[0]?.name}`;

    const [mounted, setMounted] = useState(false);
    const [chess, setChess] = useState({ houses: [] });

    useEffect(() => {
        setMounted(true);
        getChess(props.item.id).then(res => {
            setChess(res)
        })
    }, [])

    let flatsInfo = {
        1: {
            minCost: "0",
            minArea: 0
        },
        2: {
            minCost: "0",
            minArea: 0
        },
        3: {
            minCost: "0",
            minArea: 0
        },
    }

    if (chess.houses)
        console.log('chess.houses', chess.houses);
    chess.houses.forEach((house, i) => {
        house.porches.forEach((porche, j) => {
            porche.storeys.forEach((storey, k) => {
                storey.flats.forEach((flat, l) => {
                    if (flat.price && flat.price != '0' && flatsInfo[flat.rooms]) {
                        if (flatsInfo[flat.rooms].minCost == "0" || parseInt(flatsInfo[flat.rooms].minCost) > flat.price) {
                            flatsInfo[flat.rooms].minCost = flat.price;
                        }
                        if (flatsInfo[flat.rooms].minArea == 0 || parseFloat(flatsInfo[flat.rooms].minArea) > flat.spaceTotal) {
                            flatsInfo[flat.rooms].minArea = flat.spaceTotal;
                        }
                    }
                })
            })
        })
    })

    return (
        <div className={styles.item}>
            {mounted && <MediaQuery minWidth={768}>
                <Link href={`/inner?id=${props.item.id}`}>
                    <div className={styles.item__in}>
                        <div className={styles.item__dates} >
                            <div className={styles.item__updated}>
                                Обновлён {getDate(new Date(props.item.updatedAt))}
                            </div>
                            <div className={styles.item__uploaded}>
                                Внесён {getDate(new Date(props.item.createdAt))}
                            </div>
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
                        </div>
                        {props.item.minFlatPrice &&
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
                        }
                        <div className={styles.item__row}>
                            <div></div>
                        </div>

                        <div className={styles.item__row}>
                            <div className={styles.item__address}>
                                <Pin />
                                <div className={styles.item__address_text}>
                                    {props.item.title}
                                </div>
                            </div>
                            {props.item.mortgage &&
                                <div className={styles.item__mortgage}>
                                    ипотека {props.item.mortgage}%*
                                </div>
                            }

                        </div>

                        <div className={styles.item__row}>

                            <div className={styles.item__quarter}>
                                {props.item.endConstruction}
                            </div>
                            <div className={styles.item__icons}>
                                {props.item.isProtectedArea && <ProtectedArea />}
                                {props.item.hasBesideSchool && <BesideSchool />}
                                {props.item.isClosedArea && <ClosedArea />}
                                {(props.item.hasGroundParking || props.item.hasUndergroundParking || props.item.hasBesidePark) && <Parking />}
                                {props.item.hasCctv && <CCTV />}
                                {props.item.hasBesidePreSchool && <BesidePreSchool />}

                            </div>
                        </div>

                        {
                            flatsInfo[1].minCost != "0" &&
                            <div className={styles.item__row + " " + styles.item__flatsinfo}>
                                1к от {flatsInfo[1].minArea} от {money(flatsInfo[1].minCost)} ₽
                            </div>
                        }
                        {
                            flatsInfo[2].minCost != "0" &&
                            <div className={styles.item__row + " " + styles.item__flatsinfo}>
                                2к от {flatsInfo[2].minArea} от {money(flatsInfo[2].minCost)} ₽
                            </div>
                        }
                        {
                            flatsInfo[3].minCost != "0" &&
                            <div className={styles.item__row + " " + styles.item__flatsinfo}>
                                3к от {flatsInfo[3].minArea} от {money(flatsInfo[3].minCost)} ₽
                            </div>
                        }



                        <div className={styles.item__row}>
                            <div className={styles.item__phone}>
                                <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.07272 0.500008C2.4338 0.500008 2.79019 0.495321 3.15127 0.500008C3.70461 0.509383 4.1032 0.907821 4.12196 1.46095C4.1454 2.15001 4.22512 2.8297 4.43614 3.48595C4.57213 3.90313 4.50648 4.27345 4.21574 4.61563C3.90156 4.98595 3.62489 5.3797 3.34353 5.77345C3.30132 5.83438 3.29195 5.96563 3.32946 6.03595C4.04693 7.4047 5.09265 8.44532 6.45724 9.16251C6.52758 9.20001 6.65889 9.19532 6.71985 9.14845C7.13251 8.85313 7.54048 8.54845 7.93438 8.23438C8.22512 8.00001 8.544 7.9297 8.8957 8.03751C9.60379 8.24845 10.3213 8.36563 11.0622 8.3797C11.5968 8.38907 11.9953 8.81095 12 9.35001C12.0047 10.0672 12.0047 10.7891 12 11.5063C11.9953 12.0969 11.5827 12.5 10.9871 12.4953C8.91914 12.4813 6.98714 11.9469 5.24271 10.8453C2.55572 9.14845 0.862872 6.73907 0.225122 3.62188C0.0844425 2.93282 0.0469278 2.21563 0.00941313 1.50782C-0.0327909 0.917196 0.403317 0.509383 0.994173 0.500008C1.35056 0.500008 1.71164 0.500008 2.07272 0.500008Z" fill="black" />
                                </svg>
                                {phone(props.item.publicPhone)}
                            </div>
                        </div>

                    </div>
                </Link>
            </MediaQuery>}
            {
                mounted && <MediaQuery maxWidth={767}>

                    <div className={styles.item__in}>
                        <Link href={`/inner?id=${props.item.id}`}>
                            <div className={styles.item__dates} >
                                <div className={styles.item__updated}>
                                    Обновлён {getDate(new Date(props.item.updatedAt))}
                                </div>
                                <div className={styles.item__uploaded}>
                                    Внесён {getDate(new Date(props.item.createdAt))}
                                </div>
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
                            </div>
                            {props.item.minFlatPrice &&
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
                            }
                        </Link>
                        <div className={styles.item__row}>
                            <div></div>
                        </div>

                        <div className={styles.item__row}>
                            <div className={styles.item__address}>
                                <Pin />
                                <div className={styles.item__address_text}>
                                    {props.item.title}
                                </div>
                            </div>

                            <div className={styles.item__flatscount}>
                                {props.item.flatsCount} {
                                    props.item.flatsCount % 100 < 20 && props.item.flatsCount % 100 > 10 ? ' квартир' :
                                        props.item.flatsCount % 10 === 1 ? ' квартира' :
                                            props.item.flatsCount % 10 < 5 && props.item.flatsCount % 10 > 0 ? ' квартиры' :
                                                ' квартир'
                                }

                            </div>

                        </div>
                        <div className={styles.item__rows}>
                            <div className={styles.item__row}>

                                <div className={styles.item__quarter}>
                                    {props.item.endConstruction}
                                </div>
                                {props.item.mortgage &&
                                    <div className={styles.item__mortgage}>
                                        ипотека от {props.item.mortgage}%*
                                    </div>
                                }

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
                            </div>
                            {
                                console.log(flatsInfo)
                            }

                            {
                                flatsInfo[1].minCost != "0" &&
                                <div className={styles.item__row + " " + styles.item__flatsinfo}>
                                    1к от {flatsInfo[1].minArea} от {money(flatsInfo[1].minCost)} ₽
                                </div>
                            }
                            {
                                flatsInfo[2].minCost != "0" &&
                                <div className={styles.item__row + " " + styles.item__flatsinfo}>
                                    2к от {flatsInfo[2].minArea} от {money(flatsInfo[2].minCost)} ₽
                                </div>
                            }
                            {
                                flatsInfo[3].minCost != "0" &&
                                <div className={styles.item__row + " " + styles.item__flatsinfo}>
                                    3к от {flatsInfo[3].minArea} от {money(flatsInfo[3].minCost)} ₽
                                </div>
                            }

                            <a href={"tel:+7" + props.item.publicPhone}>
                                <div className={styles.item__callbtn}>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M11.227 10.1326L8.9872 12.3546C6.76514 11.0836 4.92528 9.24374 3.65427 7.02169L5.87632 4.78186C6.08075 4.56854 6.16963 4.27523 6.1163 3.98192L5.44969 0.711057C5.36969 0.302199 5.00528 0 4.57864 0H0.890032C0.392291 0 -0.0254547 0.417746 0.00120993 0.915487C0.15231 3.48418 0.934473 5.89289 2.16105 7.99939C3.56538 10.4259 5.58301 12.4346 8.0006 13.839C10.1071 15.0566 12.5158 15.8477 15.0845 15.9988C15.5823 16.0255 16 15.6077 16 15.11V11.4214C16 10.9947 15.6978 10.6303 15.2889 10.5503L12.027 9.90147C11.8849 9.87055 11.7374 9.87549 11.5978 9.91583C11.4581 9.95618 11.3307 10.0307 11.227 10.1326Z" fill="black" />
                                    </svg>
                                    <div className={styles.item__callbtn_text}>
                                        Позвонить
                                    </div>
                                </div>
                            </a>
                        </div>
                        {/* <div className={styles.item__row}>
                                    <div className={styles.item__phone}>
                                            <svg width="12" height="13" viewBox="0 0 12 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M2.07272 0.500008C2.4338 0.500008 2.79019 0.495321 3.15127 0.500008C3.70461 0.509383 4.1032 0.907821 4.12196 1.46095C4.1454 2.15001 4.22512 2.8297 4.43614 3.48595C4.57213 3.90313 4.50648 4.27345 4.21574 4.61563C3.90156 4.98595 3.62489 5.3797 3.34353 5.77345C3.30132 5.83438 3.29195 5.96563 3.32946 6.03595C4.04693 7.4047 5.09265 8.44532 6.45724 9.16251C6.52758 9.20001 6.65889 9.19532 6.71985 9.14845C7.13251 8.85313 7.54048 8.54845 7.93438 8.23438C8.22512 8.00001 8.544 7.9297 8.8957 8.03751C9.60379 8.24845 10.3213 8.36563 11.0622 8.3797C11.5968 8.38907 11.9953 8.81095 12 9.35001C12.0047 10.0672 12.0047 10.7891 12 11.5063C11.9953 12.0969 11.5827 12.5 10.9871 12.4953C8.91914 12.4813 6.98714 11.9469 5.24271 10.8453C2.55572 9.14845 0.862872 6.73907 0.225122 3.62188C0.0844425 2.93282 0.0469278 2.21563 0.00941313 1.50782C-0.0327909 0.917196 0.403317 0.509383 0.994173 0.500008C1.35056 0.500008 1.71164 0.500008 2.07272 0.500008Z" fill="black"/>
                                            </svg>
                                            {phone(props.item.publicPhone)}
                                    </div>
                                </div> */}

                    </div>
                </MediaQuery>
            }
        </div>
    );
}

function phone(number) {
    let phone = "+7 (";
    phone += number.slice(0, 3) + ") ";
    phone += number.slice(3, 6) + "-";
    phone += number.slice(6, 8) + "-";
    phone += number.slice(8, 10);
    return phone;
}

function money(money) {
    if (!money) return money;
    return money.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

export default Item;
