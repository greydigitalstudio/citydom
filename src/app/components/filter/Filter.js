'use client';
import MediaQuery from 'react-responsive'
import React, { useEffect, useState, useRef } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'

import styles from './filter.module.css'


import Image from 'next/image';


import Checkbox from './components/checkbox/Checkbox';
import Select from './components/select/Select';
import TextInput from './components/text_input/TextInput';
import RadioGroup from './components/radio_group/RadioGroup';
import CheckboxGroup from './components/checkbox_group/CheckboxGroup';
import FromTo from './components/fromto/FromTo';
import Switch from './components/switch/Switch';

const Filter = (props) => {
    const [isSectionOpened, setSectionOpened] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [filteredCount, setFilteredCount] = useState(false);
    const [updating, setUpdating] = useState(false);

    let filters = props.filters;

    let filtersButtons = []

    function numberWithSpaces(x) {
        return String(x).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
      }

    Object.keys(filters).forEach((key, index) => {
        let title = '';
        let func = () => {
            let newFilters = { ...filters };
            if (typeof newFilters[key] == 'string') {
                newFilters[key] = ''
            } else {
                delete newFilters[key];
            }
            props.setFilters(newFilters);
        }

        if (filters[key]) {
            switch (key) {
                case 'city':
                    title = `${filters[key]}`;
                    break;
                case 'place':
                    title = `${filters[key]}`;
                    break;
                case 'mortgagePayment':
                    title = `${numberWithSpaces(filters[key])}`;
                    break;
                case 'rooms':
                    let str = filters[key];
                    title = `${JSON.stringify(str.sort()).replaceAll('"', '').replace('[', '').replace(']', '').replace('0', 'Студия')}`;
                    break;
                case 'priceMin':
                    title = `от ${numberWithSpaces(filters[key])} ₽`;
                    break;
                case 'priceMax':
                    title = `до ${numberWithSpaces(filters[key])} ₽`;
                    break;
                case 'spaceTotalMin':
                    title = `от ${numberWithSpaces(filters[key])} м2`;
                    break;
                case 'spaceTotalMax':
                    title = `от ${numberWithSpaces(filters[key])} м2`;
                    break;
                case 'storeyMin':
                    title = `от ${filters[key]} этажа`;
                    break;
                case 'storeyMax':
                    title = `до ${filters[key]} этажа`;
                    break;
                case 'houseStoreyMin':
                    title = `от ${filters[key]} этажей`;
                    break;
                case 'houseStoreyMax':
                    title = `до ${filters[key]} этажей`;
                    break;
                case 'spaceKitchenMin':
                    title = `кухня от ${numberWithSpaces(filters[key])} м2`;
                    break;
                case 'spaceKitchenMax':
                    title = `кухня до ${numberWithSpaces(filters[key])} м2`;
                    break;
                case 'builtYearFrom':
                    title = `Срок ввода дома от ${filters[key]}`;
                    break;
                case 'builtYearTo':
                    title = `Срок ввода дома до ${filters[key]}`;
                    break;
                case 'multilevel':
                    title = 'Многоуровневая';
                    break;
                case 'not_first':
                    title = 'Не первый';
                    break;
                case 'not_last':
                    title = 'Не последний';
                    break;
                case 'has_kitchen':
                    title = 'Кухня-гостинная';
                    break;
                case 'vitrage_windows':
                    title = 'Витражные окна';
                    break;
                case 'hasCctv':
                    title = 'Видеонаблюдение';
                    break;
                case 'without_bank':
                    title = 'Без обременения банка';
                    break;
                case 'without_teenagers':
                    title = 'Без несовершеннолетних собственников';
                    break;
                case 'highflet':
                    title = 'Хайфлет';
                    break;
                case 'hasGroundParking':
                    title = 'Паркинг';
                    break;
                case 'closed_territory':
                    title = 'Закрытая территория';
                    break;
                case 'hasBesideSchool':
                    title = 'Рядом школа';
                    break;
                case 'material':
                    title = 'Материал дома';
                    break;
                case 'isClosedArea':
                    title = 'Закрытая территория';
                    break;
                default:
                    console.log(key)
            }
            filtersButtons.push({
                title,
                func
            })
        }
    })



    async function setFilters(e) {
        if (!e) return;
        await props.setFilters(e);
        if (!updating) {
            setUpdating(true);
            let link = 'https://tyumen.citidom.com/housing-estate?page=1&limit=1&';
            let keys = Object.keys(e);
            for (let i = 0; i < keys.length; i++) {
                if (e[keys[i]] != '') {
                    link += `${keys[i]}=${e[keys[i]]}&`
                }
            }
            link = link.slice(0, -1);
            let res = await fetch(link);
            res = await res.json();
            setFilteredCount(res.count);
            setUpdating(false);

        } else {
            //setFilters(e)
        }
    }

    useEffect(() => {
        setFilters(filters)
    }, [])

    const toggleSectionHandler = () => {
        setSectionOpened(!isSectionOpened);
        console.log(isSectionOpened);
    }


    useEffect(() => {
        // setTimeout(() => {
            setMounted(true);
        // }, 50000)
    }, []);

    return (
        <div className={styles.filter}>
            {JSON.stringify(filters)}
            {mounted &&
                <MediaQuery minWidth={768}>
                    <div className={styles.filter__in}>
                        <div className={styles.filter__title}>Полный каталог новостроек Тюмени, с планировками ценами и самой полной информацией</div>
                        <div className={styles.filter__form}>
                            <div className={styles.filter__form_section}>
                                <div className={styles.filter__row}>
                                    <CheckboxGroup
                                        onChange={(e, selected) => setFilters({ ...filters, rooms: [...selected] })}
                                        title="Комнатность"
                                        value={filters.rooms}
                                        options={[
                                            {
                                                value: '0',
                                                label: 'Студия'
                                            },
                                            {
                                                value: '1',
                                                label: '1'
                                            },
                                            {
                                                value: '2',
                                                label: '2'
                                            },
                                            {
                                                value: '3',
                                                label: '3'
                                            },
                                            {
                                                value: '4+',
                                                label: '4+'
                                            }
                                        ]}
                                    />
                                    <FromTo
                                        title="Стоимость, ₽"
                                        from_type="number"
                                        from_name="priceMin"
                                        from_placeholder="1 000 000"
                                        to_type="number"
                                        to_name="priceMax"
                                        to_placeholder="10 000 000"
                                        from={filters.priceMin}
                                        to={filters.priceMax}
                                        changeFrom={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                                    />
                                    <FromTo
                                        title="Площадь, м2"
                                        from_type="number"
                                        from_name="square_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="square_to"
                                        to_placeholder="До"
                                        from={filters.spaceTotalMin}
                                        to={filters.spaceTotalMax}
                                        changeFrom={(e) => setFilters({ ...filters, spaceTotalMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, spaceTotalMax: e.target.value })}
                                    />
                                    
                                    
                                </div>

                                <div className={styles.filter__row} >
                                    <div style={{ width: 600 }} >
                                        <TextInput
                                            onChange={(e) => setFilters({ ...filters, place: e.target.value })}
                                            value={filters.place}
                                            type="text"
                                            name="place"
                                            title="Местоположение"
                                            placeholder="Введите район или ЖК"
                                        />
                                    </div>
                                    <div style={{ width: 600 }} >
                                        <TextInput
                                            onChange={(e) => setFilters({ ...filters, mortgagePayment: e.target.value })}
                                            value={filters.mortgagePayment}
                                            type="number"
                                            name="payment"
                                            title="Ваш комфортный платеж по ипотеке"
                                            placeholder="Введите сумму платежа"
                                        />
                                    </div>
                                    <FromTo
                                        title="Этаж"
                                        from_type="number"
                                        from_name="level_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="level_to"
                                        to_placeholder="До"
                                        from={filters.storeyMin}
                                        to={filters.storeyMax}
                                        changeFrom={(e) => setFilters({ ...filters, storeyMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, storeyMax: e.target.value })}
                                    />
                                    <FromTo
                                        title="Этажей в доме"
                                        from_type="number"
                                        from_name="levelness_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="levelness_to"
                                        to_placeholder="До"
                                        from={filters.houseStoreyMin}
                                        to={filters.houseStoreyMax}
                                        changeFrom={(e) => setFilters({ ...filters, houseStoreyMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, houseStoreyMax: e.target.value })}
                                    />
                                </div>
                                <div className={styles.filter__row}>
                                    <FromTo
                                        title="Площадь кухни, м2"
                                        from_type="number"
                                        from_name="kitchen_square_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="kitchen_square_to"
                                        to_placeholder="До"
                                        from={filters.spaceKitchenMin}
                                        to={filters.spaceKitchenMax}
                                        changeFrom={(e) => setFilters({ ...filters, spaceKitchenMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, spaceKitchenMax: e.target.value })}
                                    />
                                    <FromTo
                                        title="Срок ввода дома"
                                        from_type="number"
                                        from_name="builtYearFrom"
                                        from_placeholder="1998"
                                        to_type="number"
                                        to_name="builtYearTo"
                                        to_placeholder="2020"
                                        from={filters.builtYearFrom}
                                        to={filters.builtYearTo}
                                        changeFrom={(e) => setFilters({ ...filters, builtYearFrom: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, builtYearTo: e.target.value })}
                                    />
                                    <Switch
                                        title="Многоуровневая"
                                        name="multilevel"
                                        value="multilevel"
                                        isChecked={filters.multilevel}
                                        change={(checked) => setFilters({ ...filters, multilevel: checked })}
                                    />
                                    <Switch
                                        title="Не первый"
                                        name="not_first"
                                        value="not_first"
                                        isChecked={filters.not_first}
                                        change={(checked) => setFilters({ ...filters, not_first: checked })}
                                    />
                                    <Switch
                                        title="Не последний"
                                        name="not_last"
                                        value="not_last"
                                        isChecked={filters.not_last}
                                        change={(checked) => setFilters({ ...filters, not_last: checked })}
                                    />
                                </div>
                            </div>
                            <div className={styles.filter__form_opener} onClick={toggleSectionHandler}>
                                <div className={styles.filter__form_opener_left}>
                                    <div className={styles.filter__form_opener_left_icon}>
                                        <Image
                                            src={'/opener_left_icon.svg'}
                                            width={13}
                                            height={14}
                                            alt=""
                                        />
                                    </div>
                                    <div className={styles.filter__form_opener_left_text}>Материалы и отделка</div>
                                </div>
                                <div className={styles.filter__form_opener_middle}></div>
                                <div className={styles.filter__form_opener_right}>
                                    <Image
                                        src={'/opener_right_arrow.svg'}
                                        width={8}
                                        height={4}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={`${styles.filter__form_section} ${!isSectionOpened ? styles.filter__form_section_closed : ''}`}>
                                
                                <div className={styles.filter__spacer}></div>
                                <div className={styles.filter__columns}>
                                    <div className={styles.filter__column}>
                                        <Switch
                                            title="Кухня-гостинная"
                                            name="has_kitchen"
                                            value="has_kitchen"
                                            isChecked={filters.has_kitchen}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, has_kitchen: checked })}
                                        />
                                        <Switch
                                            title="Витражные окна"
                                            name="vitrage_windows"
                                            value="vitrage_windows"
                                            isChecked={filters.vitrage_windows}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, vitrage_windows: checked })}
                                        />
                                        <Switch
                                            title="Видеонаблюдение"
                                            name="video"
                                            value="video"
                                            isChecked={filters.hasCctv}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, hasCctv: checked })}
                                        />


                                    </div>
                                    <div className={styles.filter__column}>
                                        <Switch
                                            title="Без обременения банка"
                                            name="without_bank"
                                            value="without_bank"
                                            isChecked={filters.without_bank}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, without_bank: checked })}
                                        />
                                        <Switch
                                            title="Без несовершеннолетних собственников"
                                            name="without_teenagers"
                                            value="without_teenagers"
                                            isChecked={filters.without_teenagers}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, without_teenagers: checked })}
                                        />
                                        <Switch
                                            title="Хайфлет"
                                            name="highflet"
                                            value="highflet"
                                            isChecked={filters.highflet}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, highflet: checked })}
                                        />

                                    </div>
                                    <div className={styles.filter__column}>
                                        <Switch
                                            title="Паркинг"
                                            name="has_parking"
                                            value="has_parking"
                                            isChecked={filters.hasGroundParking}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, hasGroundParking: checked })}
                                        />
                                        <Switch
                                            title="Закрытая территория"
                                            name="closed_territory"
                                            value="closed_territory"
                                            isChecked={filters.isClosedArea}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, isClosedArea: checked })}
                                        />
                                        <Switch
                                            title="Рядом школа"
                                            name="school_around"
                                            value="school_around"
                                            isChecked={filters.hasBesideSchool}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, hasBesideSchool: checked })}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className={styles.filter__form_buttons}>
                            <div className={styles.filter__form_buttons_left}>
                                {
                                    filtersButtons.map((btn, index) => {
                                        return (
                                            <div key={index} className={styles.filter__form_filter_button} >
                                                <div>
                                                    {btn.title}
                                                </div>
                                                <svg onClick={btn.func} width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.08693 2.99964L4.87687 1.21362C4.95525 1.13522 4.99929 1.02889 4.99929 0.918027C4.99929 0.807159 4.95525 0.700833 4.87687 0.622437C4.79849 0.544042 4.69217 0.5 4.58132 0.5C4.47047 0.5 4.36416 0.544042 4.28577 0.622437L2.5 2.41263L0.714226 0.622437C0.635842 0.544042 0.52953 0.5 0.418678 0.5C0.307826 0.5 0.201514 0.544042 0.12313 0.622437C0.0447462 0.700833 0.000710398 0.807159 0.000710397 0.918027C0.000710396 1.02889 0.0447462 1.13522 0.12313 1.21362L1.91307 2.99964L0.12313 4.78567C0.0841145 4.82438 0.0531469 4.87042 0.0320137 4.92115C0.0108805 4.97189 0 5.0263 0 5.08126C0 5.13622 0.0108805 5.19064 0.0320137 5.24137C0.0531469 5.2921 0.0841145 5.33815 0.12313 5.37685C0.161827 5.41587 0.207867 5.44685 0.258592 5.46798C0.309318 5.48912 0.363726 5.5 0.418678 5.5C0.47363 5.5 0.528038 5.48912 0.578764 5.46798C0.629489 5.44685 0.675529 5.41587 0.714226 5.37685L2.5 3.58666L4.28577 5.37685C4.32447 5.41587 4.37051 5.44685 4.42124 5.46798C4.47196 5.48912 4.52637 5.5 4.58132 5.5C4.63627 5.5 4.69068 5.48912 4.74141 5.46798C4.79213 5.44685 4.83817 5.41587 4.87687 5.37685C4.91589 5.33815 4.94685 5.2921 4.96799 5.24137C4.98912 5.19064 5 5.13622 5 5.08126C5 5.0263 4.98912 4.97189 4.96799 4.92115C4.94685 4.87042 4.91589 4.82438 4.87687 4.78567L3.08693 2.99964Z" fill="#7C7C7C" />
                                                </svg>

                                            </div>
                                        )
                                    })
                                }
                                {
                                    filtersButtons.length > 0 &&
                                    <div className={styles.filter__form_filter_button_clear} onClick={() => {
                                        setFilters({})
                                    }}>
                                        <div>
                                            Очистить все
                                        </div>
                                        <svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1.04842V1.39844C5 1.53841 4.90627 1.64348 4.78122 1.64348L0.218784 1.64339C0.0938083 1.64339 0 1.5267 0 1.39836V1.04834C0 0.908366 0.093732 0.803301 0.218784 0.803301H1.36464V0.663327C1.36464 0.569985 1.42713 0.5 1.51047 0.5H3.4896C3.57294 0.5 3.63543 0.569987 3.63543 0.663327V0.803301H4.78128C4.90626 0.791745 5 0.908441 5 1.04842ZM0.250071 1.77172H4.73959L4.48957 7.40666C4.48957 7.45329 4.44794 7.5 4.40623 7.5H0.583371C0.541737 7.5 0.50003 7.46501 0.50003 7.40666L0.250071 1.77172ZM3.6146 6.92833C3.6146 7.04503 3.69795 7.13829 3.80206 7.13829C3.90626 7.13829 3.97914 7.04494 3.98952 6.93996L4.12496 2.34335C4.12496 2.22665 4.04162 2.1334 3.9375 2.1334C3.83331 2.1334 3.76043 2.22674 3.75004 2.33172L3.6146 6.92833ZM2.31254 6.92833C2.31254 7.04503 2.39588 7.13829 2.5 7.13829C2.60419 7.13829 2.68746 7.04494 2.68746 6.92833V2.34338C2.68746 2.22669 2.60412 2.13343 2.5 2.13343C2.3958 2.13343 2.31254 2.22677 2.31254 2.34338V6.92833ZM0.885422 2.34338L1.02086 6.94C1.02086 7.05669 1.1042 7.13832 1.20832 7.13832C1.31251 7.13832 1.39578 7.04497 1.39578 6.92836L1.25002 2.33175C1.25002 2.21505 1.16668 2.13343 1.06256 2.13343C0.958369 2.13335 0.875032 2.22669 0.885422 2.34338Z" fill="white" />
                                        </svg>

                                    </div>
                                }
                            </div>
                            <div className={styles.filter__form_buttons_right}>
                                <div className={styles.filter__form_button} onClick={props.useFilters}>
                                    Показать {filteredCount} {
                                        filteredCount % 100 < 20 && filteredCount % 100 > 10 ? 'предложений' :
                                            filteredCount % 10 === 1 ? 'предложение' :
                                                filteredCount % 10 < 5 && filteredCount % 10 > 0 ? 'предложения' :
                                                    'предложений'
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            }
            {mounted &&
                <MediaQuery maxWidth={767}>
                    <div className={styles.filter__title}>Полный каталог новостроек Тюмени, с планировками ценами и самой полной информацией</div>
                    <div className={styles.filter__in}>
                        <div className={styles.filter__form}>
                            <div className={styles.filter__form_section}>
                                <div className={styles.filter__row}>
                                    <CheckboxGroup
                                        onChange={(e) => setFilters({ ...filters, room: e.target.value })}
                                        value={filters.room}
                                        options={[
                                            {
                                                value: '0',
                                                label: 'Студия'
                                            },
                                            {
                                                value: '1',
                                                label: '1'
                                            },
                                            {
                                                value: '2',
                                                label: '2'
                                            },
                                            {
                                                value: '3',
                                                label: '3'
                                            },
                                            {
                                                value: '4+',
                                                label: '4+'
                                            }
                                        ]}
                                    />

                                    
                                </div>
                                <div className={styles.filter__row}>
                                    <TextInput
                                        onChange={(e) => setFilters({ ...filters, q: e.target.value })}
                                        value={filters.q}
                                        type="text"
                                        name="й"
                                        title="Местоположение"
                                        placeholder="Введите район или ЖК"
                                    />
                                </div>
                                <div className={styles.filter__row}>
                                    <TextInput
                                        onChange={(e) => setFilters({ ...filters, priceMin: e.target.value })}
                                        value={filters.priceMin}
                                        type="number"
                                        name="priceMin"
                                        placeholder="Цена от"
                                    />
                                    <TextInput
                                        onChange={(e) => setFilters({ ...filters, priceMax: e.target.value })}
                                        value={filters.priceMax}
                                        type="number"
                                        name="priceMax"
                                        placeholder="Цена до"
                                    />


                                </div>
                                <div className={styles.filter__row}>
                                    <TextInput
                                        onChange={(e) => setFilters({ ...filters, mortgagePayment: e.target.value })}
                                        value={filters.mortgagePayment}
                                        type="number"
                                        name="mortgagePayment"
                                        title="Ваш комфортный платеж по ипотеке"
                                        placeholder="Введите сумму платежа"
                                    />
                                </div>
                                <div className={styles.filter__row}>
                                    <TextInput
                                        onChange={(e) => setFilters({ ...filters, builtYearFrom: e.target.value })}
                                        value={filters.builtYearFrom}
                                        type="text"
                                        name="builtYearFrom"
                                        placeholder="Срок ввода от"
                                    />
                                    <TextInput
                                        onChange={(e) => setFilters({ ...filters, builtYearTo: e.target.value })}
                                        value={filters.builtYearTo}
                                        type="text"
                                        name="builtYearTo"
                                        placeholder="до"
                                    />
                                </div>

                            </div>
                            <div className={styles.filter__form_opener} onClick={toggleSectionHandler}>
                                <div className={styles.filter__form_opener_left}>
                                    <div className={styles.filter__form_opener_left_text}>Расширенный поиск</div>
                                </div>
                                <div className={styles.filter__form_opener_middle}></div>
                                <div className={styles.filter__form_opener_right}>
                                    <Image
                                        src={'/opener_right_arrow.svg'}
                                        width={8}
                                        height={4}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className={`${styles.filter__form_section} ${!isSectionOpened ? styles.filter__form_section_closed : ''}`}>

                                <div className={styles.filter__row}>
                                    <FromTo
                                        title="Площадь, м2"
                                        from_type="number"
                                        from_name="square_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="square_to"
                                        to_placeholder="До"
                                        from={filters.spaceTotalMin}
                                        to={filters.spaceTotalMax}
                                        changeFrom={(e) => setFilters({ ...filters, spaceTotalMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, spaceTotalMax: e.target.value })}
                                    />
                                </div>
                                <div className={styles.filter__row}>
                                    <FromTo
                                        title="Площадь кухни, м2"
                                        from_type="number"
                                        from_name="kitchen_square_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="kitchen_square_to"
                                        to_placeholder="До"
                                        from={filters.spaceKitchenMin}
                                        to={filters.spaceKitchenMax}
                                        changeFrom={(e) => setFilters({ ...filters, spaceKitchenMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, spaceKitchenMax: e.target.value })}
                                    />
                                </div>
                                <div className={styles.filter__row}>
                                    <FromTo
                                        title="Этаж"
                                        from_type="number"
                                        from_name="level_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="level_to"
                                        to_placeholder="До"
                                        from={filters.storeyMin}
                                        to={filters.storeyMax}
                                        changeFrom={(e) => setFilters({ ...filters, storeyMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, storeyMax: e.target.value })}
                                    />

                                </div>
                                <div className={styles.filter__row}>
                                    <FromTo
                                        title="Этажей в доме"
                                        from_type="number"
                                        from_name="levelness_from"
                                        from_placeholder="От"
                                        to_type="number"
                                        to_name="levelness_to"
                                        to_placeholder="До"
                                        from={filters.houseStoreyMin}
                                        to={filters.houseStoreyMax}
                                        changeFrom={(e) => setFilters({ ...filters, houseStoreyMin: e.target.value })}
                                        changeTo={(e) => setFilters({ ...filters, houseStoreyMax: e.target.value })}
                                    />
                                </div>

                                <div className={styles.filter__row}>
                                    <Switch
                                        title="Многоуровневая"
                                        name="multilevel"
                                        value="multilevel"
                                        isChecked={filters.multilevel}
                                        change={(checked) => setFilters({ ...filters, multilevel: checked })}
                                    />

                                </div>

                                <div className={styles.filter__row}>
                                    <Checkbox
                                        title="Не первый"
                                        name="not_first"
                                        value="not_first"
                                        isChecked={filters.not_first}
                                        change={(checked) => setFilters({ ...filters, not_first: checked })}
                                    />
                                    <Checkbox
                                        title="Не последний"
                                        name="not_last"
                                        value="not_last"
                                        isChecked={filters.not_last}
                                        change={(checked) => setFilters({ ...filters, not_last: checked })}
                                    />
                                </div>

                                <div className={styles.filter__row}>
                                    <div className={styles.filter__field_subtitle}>
                                        Материал дома
                                    </div>
                                    <Select
                                        value={filters.material}
                                        options={[
                                            {
                                                value: 'moscow',
                                                label: 'Москва'
                                            },
                                            {
                                                value: 'spb',
                                                label: 'Санкт-Петербург'
                                            },
                                            {
                                                value: 'tula',
                                                label: 'Тула'
                                            }
                                        ]}
                                    />
                                </div>
                                <div className={styles.filter__row}>


                                </div>

                                <div className={styles.filter__columns}>
                                    <div className={styles.filter__column}>
                                        <Switch
                                            title="Кухня-гостинная"
                                            name="has_kitchen"
                                            value="has_kitchen"
                                            isChecked={filters.has_kitchen}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, has_kitchen: checked })}
                                        />
                                        <Switch
                                            title="Витражные окна"
                                            name="vitrage_windows"
                                            value="vitrage_windows"
                                            isChecked={filters.vitrage_windows}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, vitrage_windows: checked })}
                                        />
                                        <Switch
                                            title="Видеонаблюдение"
                                            name="video"
                                            value="video"
                                            isChecked={filters.hasCctv}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, hasCctv: checked })}
                                        />
                                        <Switch
                                            title="Без обременения банка"
                                            name="without_bank"
                                            value="without_bank"
                                            isChecked={filters.without_bank}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, without_bank: checked })}
                                        />
                                        <Switch
                                            title="Без несовершеннолетних собственников"
                                            name="without_teenagers"
                                            value="without_teenagers"
                                            isChecked={filters.without_teenagers}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, without_teenagers: checked })}
                                        />
                                        <Switch
                                            title="Хайфлет"
                                            name="highflet"
                                            value="highflet"
                                            isChecked={filters.highflet}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, highflet: checked })}
                                        />
                                        <Switch
                                            title="Паркинг"
                                            name="has_parking"
                                            value="has_parking"
                                            isChecked={filters.hasGroundParking}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, hasGroundParking: checked })}
                                        />
                                        <Switch
                                            title="Закрытая территория"
                                            name="closed_territory"
                                            value="closed_territory"
                                            isChecked={filters.isClosedArea}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, isClosedArea: checked })}
                                        />
                                        <Switch
                                            title="Рядом школа"
                                            name="school_around"
                                            value="school_around"
                                            isChecked={filters.hasBesideSchool}
                                            className={styles.filter__switch_mb}
                                            change={(checked) => setFilters({ ...filters, hasBesideSchool: checked })}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={styles.filter__form_buttons_left}>
                                {
                                    filtersButtons.map((btn, key) => {
                                        return (
                                            <div key={key} className={styles.filter__form_filter_button} >
                                                <div>
                                                    {btn.title}
                                                </div>
                                                <svg onClick={btn.func} width="5" height="6" viewBox="0 0 5 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M3.08693 2.99964L4.87687 1.21362C4.95525 1.13522 4.99929 1.02889 4.99929 0.918027C4.99929 0.807159 4.95525 0.700833 4.87687 0.622437C4.79849 0.544042 4.69217 0.5 4.58132 0.5C4.47047 0.5 4.36416 0.544042 4.28577 0.622437L2.5 2.41263L0.714226 0.622437C0.635842 0.544042 0.52953 0.5 0.418678 0.5C0.307826 0.5 0.201514 0.544042 0.12313 0.622437C0.0447462 0.700833 0.000710398 0.807159 0.000710397 0.918027C0.000710396 1.02889 0.0447462 1.13522 0.12313 1.21362L1.91307 2.99964L0.12313 4.78567C0.0841145 4.82438 0.0531469 4.87042 0.0320137 4.92115C0.0108805 4.97189 0 5.0263 0 5.08126C0 5.13622 0.0108805 5.19064 0.0320137 5.24137C0.0531469 5.2921 0.0841145 5.33815 0.12313 5.37685C0.161827 5.41587 0.207867 5.44685 0.258592 5.46798C0.309318 5.48912 0.363726 5.5 0.418678 5.5C0.47363 5.5 0.528038 5.48912 0.578764 5.46798C0.629489 5.44685 0.675529 5.41587 0.714226 5.37685L2.5 3.58666L4.28577 5.37685C4.32447 5.41587 4.37051 5.44685 4.42124 5.46798C4.47196 5.48912 4.52637 5.5 4.58132 5.5C4.63627 5.5 4.69068 5.48912 4.74141 5.46798C4.79213 5.44685 4.83817 5.41587 4.87687 5.37685C4.91589 5.33815 4.94685 5.2921 4.96799 5.24137C4.98912 5.19064 5 5.13622 5 5.08126C5 5.0263 4.98912 4.97189 4.96799 4.92115C4.94685 4.87042 4.91589 4.82438 4.87687 4.78567L3.08693 2.99964Z" fill="#7C7C7C" />
                                                </svg>

                                            </div>
                                        )
                                    })
                                }
                                {
                                    filtersButtons.length > 0 &&
                                    <div className={styles.filter__form_filter_button_clear} >
                                        <div>
                                            Очистить все
                                        </div>
                                        <svg onClick={() => {
                                            setFilters({})
                                        }} width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5 1.04842V1.39844C5 1.53841 4.90627 1.64348 4.78122 1.64348L0.218784 1.64339C0.0938083 1.64339 0 1.5267 0 1.39836V1.04834C0 0.908366 0.093732 0.803301 0.218784 0.803301H1.36464V0.663327C1.36464 0.569985 1.42713 0.5 1.51047 0.5H3.4896C3.57294 0.5 3.63543 0.569987 3.63543 0.663327V0.803301H4.78128C4.90626 0.791745 5 0.908441 5 1.04842ZM0.250071 1.77172H4.73959L4.48957 7.40666C4.48957 7.45329 4.44794 7.5 4.40623 7.5H0.583371C0.541737 7.5 0.50003 7.46501 0.50003 7.40666L0.250071 1.77172ZM3.6146 6.92833C3.6146 7.04503 3.69795 7.13829 3.80206 7.13829C3.90626 7.13829 3.97914 7.04494 3.98952 6.93996L4.12496 2.34335C4.12496 2.22665 4.04162 2.1334 3.9375 2.1334C3.83331 2.1334 3.76043 2.22674 3.75004 2.33172L3.6146 6.92833ZM2.31254 6.92833C2.31254 7.04503 2.39588 7.13829 2.5 7.13829C2.60419 7.13829 2.68746 7.04494 2.68746 6.92833V2.34338C2.68746 2.22669 2.60412 2.13343 2.5 2.13343C2.3958 2.13343 2.31254 2.22677 2.31254 2.34338V6.92833ZM0.885422 2.34338L1.02086 6.94C1.02086 7.05669 1.1042 7.13832 1.20832 7.13832C1.31251 7.13832 1.39578 7.04497 1.39578 6.92836L1.25002 2.33175C1.25002 2.21505 1.16668 2.13343 1.06256 2.13343C0.958369 2.13335 0.875032 2.22669 0.885422 2.34338Z" fill="white" />
                                        </svg>

                                    </div>
                                }
                            </div>

                            <div className={styles.filter__form_button_wrapper}>
                                <div className={styles.filter__form_button_primary} onClick={props.useFilters}>
                                    Показать {filteredCount} {
                                        filteredCount % 100 < 20 && filteredCount % 100 > 10 ? 'предложений' :
                                            filteredCount % 10 === 1 ? 'предложение' :
                                                filteredCount % 10 < 5 && filteredCount % 10 > 0 ? 'предложения' :
                                                    'предложений'
                                    }
                                </div>
                            </div>

                            <div className={styles.filter__form_button_wrapper}>
                                <div className={styles.filter__form_button_secondary}>
                                    Показать на карте
                                </div>
                            </div>

                        </div>
                    </div>
                </MediaQuery>
            }
            {!mounted &&
                
                <div className={styles.filter__in}>
                    <SkeletonTheme height={30}>
                        <div className={styles.filter__title}><Skeleton count={2}/></div>
                        <div className={styles.filter__form}>
                            <div className={styles.filter__form_section}>
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                                <Skeleton />
                            </div>
                            <Skeleton />
                        </div>
                    </SkeletonTheme>
                </div>
            }
        </div>
    );
}

export default Filter;
