'use client';

import React from 'react';
import styles from './results.module.css'
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import Item from './components/item/item'
import Select from './components/select/Select'

async function getHousing(options = {
    page: 1,
    limit: 6,
    sort: 'fresh_at_asc'
}) {
    let res = await fetch(`https://tyumen.citidom.com/housing-estate?page=${options.page}&limit=${options.limit}&sort=${options.sort}`);
    res = await res.json();
    return res
}

async function getHousingForMap() {
    let res = await fetch(`https://tyumen.citidom.com/housing-estate/map`);
    res = await res.json();
    return res
}

class Results extends React.Component  {

    constructor(props) {
        super(props);
        this.state = {
            housing: [],
            mapsData: {
                state: false
            },
            pageData: {
                page: 1,
                last: 10
            },
            sort: 'fresh_at_asc',
            houseCount: 0
        }
    }

    componentDidMount() {
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
            this.setState({
                housing: res.items,
                houseCount: res.count
            })
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
            this.setState({
                mapsData: data
            })
        })
    }

    onChange = (e) => {
        this.setState({
            sort: e.target.value
        })
        console.log(e.target.value)
        this.changePage()
    }

    render() {

        // const [housing, setHousing] = useState([]);
        // const [mapsData, setMapsData] = useState({
        //     state: false
        // });
        // const [pageData, setPageData] = useState({
        //     page: 1,
        //     last: 10
        // });

        // const [sort, setSort] = useState('fresh_at_asc');


        return (
            <div className={styles.results}>
                <div className={styles.results__in}>
                    <div className={styles.results__header}>
                        <div className={styles.results__title}>
                            Продажа новостроек в Тюмени
                            <div id="sort-select">
                            <Select
                                change = {this.onChange}
                                options={[
                                    {
                                        value: "fresh_at_asc",
                                        label: 'В начале новые'
                                    },
                                    {
                                        value: "fresh_at_desc",
                                        label: 'В начале старые'
                                    },
                                    {
                                        value: "popularity_asc",
                                        label: 'В начале популярные'
                                    },
                                    {
                                        value: "popularity_desc",
                                        label: 'В начале не популярные'
                                    }
                                ]}
                            />
                            </div>
                            
                            </div>
    
                        <div className={styles.results__select}></div>
                        <div className={styles.results__lighttext}>Найдено {this.state.houseCount} 
                        {
                        this.state.houseCount % 100 < 20 && this.state.houseCount % 100 > 10 ? ' предложений' : 
                        this.state.houseCount % 10 === 1 ? ' предложение' :
                        this.state.houseCount % 10 < 5 && this.state.houseCount % 10 > 0 ? ' предложения' :
                        ' предложений'
                        }</div>
                        <div className={styles.results__subtitle}>Услуги компании бесплатны</div>
                    </div>
                    <div className={styles.results__content}>
                        <div className={styles.results__box}>
                        {this.state.housing.length > 0 && this.state.housing.map(item => <Item item={item} pageData={this.state.pageData} sort={this.state.sort} key={item.id} />) }
                        </div>
                        {
                            this.state.mapsData.state && 
                            <YMaps>
                                <Map width='100%' className={styles.results__map} defaultState={{ center: this.state.mapsData.center, zoom: this.state.mapsData.zoom }}>
                                    <Clusterer
                                        options={{
                                            preset: "islands#greenClusterIcons",
                                            groupByCoordinates: false,
                                        }}
                                    >
                                        {this.state.mapsData.items?.map(item => <Placemark modules={['geoObject.addon.hint']} geometry={item.geometry} properties={item.properties} options={item.options} key={item.id} />)}
                                    </Clusterer>
                                </Map>
                            </YMaps>
                        }
                    </div>
                    <div className={styles.results__pagination}>
                        <div className={styles.results__pagination_item}>
                            первая
                        </div>
                            { this.getPages() }
                        <div className={styles.results__pagination_item}>
                            последняя
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getPages() {
        let pages = [];
        let firstdots = false;
        let lastdots = false;
        for(let i = 0; i < this.state.pageData.last; i++) {
            if(i < this.state.pageData.page - 2){
                if(!firstdots) {
                    pages.push(<div id="page-1" className={styles.results__pagination_item}>...</div>)
                    firstdots = true;
                }
                continue;
            }
            if(i > this.state.pageData.page + 2){
                if(!lastdots) {
                    pages.push(<div id={`page-${this.state.pageData.last}`} className={styles.results__pagination_item}>...</div>)
                    lastdots = true;
                }
                continue;
            }
            pages.push(<div onClick={(e) => {
                this.changePage(e)
            }} id={`page-${i+1}`} className={`${styles.results__pagination_item}${this.state.pageData.page == i+1 ? (' ' + styles.results__pagination_primary) : '' }`}>{i + 1}</div>)
        }
        return pages;
    }
    
    async changePage(e) {
        let page = e ? e.target.id.split('-')[1] : this.state.pageData.page;
        let res = await getHousing({
            page, limit: 6, sort: this.state.sort
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
        this.setState({
            housing: res.items,
            pageData: {
                page: page,
                last: res.pagination.end
            }
        })
    }
}



export default Results;
