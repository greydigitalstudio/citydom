'use client';

import React, { useState, useEffect } from 'react';
import styles from './results.module.css'
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import Item from './components/item/item'

async function getHousing(options = {
    page: 1,
    limit: 6
}) {
    let res = await fetch(`https://tyumen.citidom.com/housing-estate?page=${options.page}&limit=${options.limit}`);
    res = await res.json();
    return res
}

async function getHousingForMap() {
    let res = await fetch(`https://tyumen.citidom.com/housing-estate/map`);
    res = await res.json();
    return res
}

const Results = () => {

    const [housing, setHousing] = useState([]);
    const [mapsData, setMapsData] = useState({
        state: false
    });
    const [pageData, setPageData] = useState({
        page: 1,
        last: 10
    });
    const [houseCount, setHouseCount] = useState(0);

    console.log(pageData)

    useEffect(() => {
        getHousing().then(res => {
            res.items.forEach(item => {
                item.endConstruction = item.endConstruction.trim()
                let regexp = new RegExp(/(1|2|3|4) кв\. \d\d\d\d$/g)
                if(!regexp.test(item.endConstruction)) {
                    item.endConstruction = '-'
                } else {
                    item.endConstruction = item.endConstruction.match(regexp)[0];
                    item.endConstruction = item.endConstruction.replace('1 ', 'I ')
                    .replace('2 ', 'II ')
                    .replace('3 ', 'III ')
                    .replace('4 ', 'IV ')
                }
            })
            setHousing(res.items);
            setHouseCount(res.count);
        })
        getHousingForMap().then(res => {
            let center = [0, 0]
            res.forEach(item => {
                center[0] += parseFloat(item.latitude);
                center[1] += parseFloat(item.longitude);
            })
            center[0] /= res.length;
            center[1] /= res.length;
            let data = {
                state: true,
                center: center,
                zoom: 9,
                items: res.map(item => {
                    return {
                        geometry: [parseFloat(item.latitude), parseFloat(item.longitude)],
                        properties: {
                            hintContent: item.title,
                            hintLayout: item.title
                        },
                        options: {
                            preset: 'islands#greenCircleDotIcon',
                            hintOpenTimeout: 100,
                            hintCloseTimeout: 1
                        },
                        id: item.id
                    }
                })
            }
            setMapsData(data);
        })
    }, []);

    return (
        <div className={styles.results}>
            <div className={styles.results__in}>
                <div className={styles.results__header}>
                    <div className={styles.results__title}>Продажа новостроек в Тюмени</div>
 
                    <div className={styles.results__select}></div>
                    <div className={styles.results__lighttext}>Найдено {houseCount} 
                    {
                    houseCount % 100 < 20 && houseCount % 100 > 10 ? ' предложений' : 
                    houseCount % 10 === 1 ? ' предложение' :
                    houseCount % 10 < 5 && houseCount % 10 > 0 ? ' предложения' :
                    ' предложений'
                    }</div>
                    <div className={styles.results__subtitle}>Услуги компании бесплатны</div>
                </div>
                <div className={styles.results__content}>
                    <div className={styles.results__box}>
                    {housing.length > 0 && housing.map(item => <Item item={item} key={item.id} />) }
                    </div>
                    {
                        mapsData.state && 
                        <YMaps>
                            <Map width='100%' className={styles.results__map} defaultState={{ center: mapsData.center, zoom: mapsData.zoom }}>
                                <Clusterer
                                    options={{
                                        preset: "islands#greenClusterIcons",
                                        groupByCoordinates: false,
                                    }}
                                >
                                    {mapsData.items?.map(item => <Placemark modules={['geoObject.addon.hint']} geometry={item.geometry} properties={item.properties} options={item.options} key={item.id} />)}
                                </Clusterer>
                            </Map>
                        </YMaps>
                    }
                </div>
                <div className={styles.results__pagination}>
                    <div className={styles.results__pagination_item}>
                        первая
                    </div>
                        { getPages(pageData, setHousing, setPageData) }
                    <div className={styles.results__pagination_item}>
                        последняя
                    </div>
                </div>
            </div>
        </div>
    );
}

function getPages(pageData, setHousing, setPageData) {
    console.log(setHousing)
    let pages = [];
    let firstdots = false;
    let lastdots = false;
    for(let i = 0; i < pageData.last; i++) {
        if(i < pageData.page - 2){
            if(!firstdots) {
                pages.push(<div id="page-1" className={styles.results__pagination_item}>...</div>)
                firstdots = true;
            }
            continue;
        }
        if(i > pageData.page + 2){
            if(!lastdots) {
                pages.push(<div id={`page-${pageData.last}`} className={styles.results__pagination_item}>...</div>)
                lastdots = true;
            }
            continue;
        }
        pages.push(<div onClick={(e) => {
            changePage(e, setHousing, setPageData)
        }} id={`page-${i+1}`} className={`${styles.results__pagination_item}${pageData.page == i+1 ? (' ' + styles.results__pagination_primary) : '' }`}>{i + 1}</div>)
    }
    return pages;
}

async function changePage(e, setHousing, setPageData) {
    let page = e.target.id.split('-')[1]
    let res = await getHousing({
        page, limit: 6
    })
    res.items.forEach(item => {
        item.endConstruction = item.endConstruction.trim()
        let regexp = new RegExp(/(1|2|3|4) кв\. \d\d\d\d$/g)
        if(!regexp.test(item.endConstruction)) {
            item.endConstruction = '-'
        } else {
            item.endConstruction = item.endConstruction.match(regexp)[0];
            item.endConstruction = item.endConstruction.replace('1 ', 'I ')
            .replace('2 ', 'II ')
            .replace('3 ', 'III ')
            .replace('4 ', 'IV ')
        }
    })
    setHousing(res.items);
    setPageData({
        page: page,
        last: res.pagination.end
    })
}

export default Results;
