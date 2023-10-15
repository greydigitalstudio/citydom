'use client';

import React from 'react';
import styles from './results.module.css'
import { YMaps, Map, Placemark, Clusterer } from '@pbe/react-yandex-maps';
import Item from './components/item/item'
import Select from './components/select/Select'

import MediaQuery from 'react-responsive'

async function getHousing(options = {
    page: 1,
    sort: 'fresh_at_asc',
    filters
}) {
    // use filters
    let filterstr = ''
    Object.keys(options.filters).forEach(f => {
        filterstr += `&${f}=${options.filters[f]}`
    })
    let res = await fetch(`https://tyumen.citidom.com/housing-estate?page=${options.page}&sort=${options.sort}${filterstr}`);
    res = await res.json();
    return res
}

async function getHousingForMap() {
    let res = await fetch(`https://tyumen.citidom.com/housing-estate/map`);
    res = await res.json();
    return res;
}

class Results extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            housing: [],
            mapsData: {
                state: false
            },
            pageData: {
                page: 1,
                pageSize: 10,
                last: 10
            },
            sort: 'fresh_at_asc',
            houseCount: 0,
            mounted: false,
            maps: false
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.filters != this.props.filters) {
            this.componentDidMount()
        }
    }

    async componentDidMount() {
        // ширина окна
        this.setState({
            mounted: true
        })
        let width = window.innerWidth;

        getHousing({
            page: 1,
            limit: this.state.pageData.pageSize,
            sort: this.state.sort,
            filters: this.props.filters
        }).then(res => {
            res.items.map(i => i).forEach(item => {
                item.endConstruction = item.endConstruction.trim()
                let regexp = new RegExp(/(1|2|3|4) кв\. \d\d\d\d$/g)
                if (!regexp.test(item.endConstruction)) {
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
        await getHousingForMap().then(res => {
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
        setTimeout(() => {
            this.setState({
                maps: true
            })
        }, 1000)
    }

    onChange = (e) => {
        this.setState({
            sort: e.target.value
        })
        this.changePage()
    }

    render() {
        const items = this.state.housing.map((i) => (
            i
        ))
        return (
            <div className={styles.results}>
                <div className={styles.results__in}>
                    <div className={styles.results__header}>
                        <div className={styles.results__title}>
                            <div>
                                Продажа новостроек в Тюмени
                            </div>
                            <div id="sort-select">
                                <Select
                                    change={this.onChange}
                                    options={[
                                        {
                                            value: "fresh_at_asc",
                                            label: 'В начале новые',
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
                    {this.state.mounted &&
                        <MediaQuery minDeviceWidth={768}>
                            <div className={styles.results__content}>
                                <div className={styles.results__box}>
                                    {this.state.housing.length > 0 && items.filter(i => i.flatsCount != 0).map((item) => (
                                    <Item item={item} pageData={this.state.pageData} sort={this.state.sort} key={item.id} />
                                    ))}
                                </div>
                                {this.state.maps &&
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
                                <div className={styles.results__pagination_item} onClick={this.firstPage}>
                                    первая
                                </div>
                                {this.getPages()}
                                <div className={styles.results__pagination_item} onClick={this.lastPage}>
                                    последняя
                                </div>
                            </div>
                        </MediaQuery>
                    }

                    {this.state.mounted &&
                        <MediaQuery maxDeviceWidth={767}>
                            <div className={styles.results__content}>
                                <div className={styles.results__box}>
                                    {this.state.housing.length > 0 && items.filter(i => i.flatsCount != 0).map(item => <Item item={item} pageData={this.state.pageData} sort={this.state.sort} key={item.id} />)}
                                </div>
                            </div>
                            <div className={styles.results__pagination}>
                                <div className={styles.results__pagination_item} onClick={this.firstPage}>
                                    первая
                                </div>
                                {this.getPagesMobile()}
                                <div className={styles.results__pagination_item} onClick={this.lastPage}>
                                    последняя
                                </div>
                            </div>
                        </MediaQuery>
                    }

                </div>
            </div>
        );
    }

    getPages() {
        let pages = [];
        let firstdots = false;
        let lastdots = false;
        for (let i = 0; i < this.state.pageData.last; i++) {
            if (i < parseInt(this.state.pageData.page) - 4) {
                if (!firstdots) {
                    pages.push(<div id="page-1" className={styles.results__pagination_item}>...</div>)
                    firstdots = true;
                }
                continue;
            }
            if (i >= parseInt(this.state.pageData.page) + 3) {
                if (!lastdots) {
                    pages.push(<div id={`page-${this.state.pageData.last}`} className={styles.results__pagination_item}>...</div>)
                    lastdots = true;
                }
                continue;
            }
            pages.push(<div onClick={(e) => {
                this.changePage(e)
            }} id={`page-${i + 1}`} className={`${styles.results__pagination_item}${this.state.pageData.page == i + 1 ? (' ' + styles.results__pagination_primary) : ''}`}>{i + 1}</div>)
        }
        return pages;
    }

    getPagesMobile() {
        let pages = [];
        let pagesSize = 0
        for (let i = 0; i < this.state.pageData.last; i++) {
            if (i < parseInt(this.state.pageData.page) - 2) {
                continue;
            }
            if ((i >= parseInt(this.state.pageData.page) + 1) && pagesSize >= 3) {
                continue;
            }
            pagesSize++;
            pages.push(<div onClick={(e) => {
                this.changePage(e)
            }} id={`page-${i + 1}`} className={`${styles.results__pagination_item}${this.state.pageData.page == i + 1 ? (' ' + styles.results__pagination_primary) : ''}`}>{i + 1}</div>)
        }
        return pages;
    }

    firstPage = async () => {
        this.changePage({ target: { id: 'page-1' } })
    }

    lastPage = async () => {
        this.changePage({ target: { id: `page-${this.state.pageData.last}` } })
    }

    async changePage(e) {
        let page = e ? e.target.id.split('-')[1] : this.state.pageData.page;
        let res = await getHousing({
            page, limit: this.state.pageData.pageSize, sort: this.state.sort, filters: this.props.filters
        })
        res.items.forEach(item => {
            item.endConstruction = item.endConstruction.trim()
            let regexp = new RegExp(/(1|2|3|4) кв\. \d\d\d\d$/g)
            if (!regexp.test(item.endConstruction)) {
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
                pageSize: this.state.pageData.pageSize,
                last: res.pagination.last
            }
        })
    }
}



export default Results;
