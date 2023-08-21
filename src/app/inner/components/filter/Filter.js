import styles from './filter.module.css'
import RadioGroup from '../radio_group/RadioGroup'

// icons
import Checkerboard from './icons/Checkerboard'
import Layouts from './icons/Layouts'
import MediaQuery from 'react-responsive'
import { useEffect, useState } from 'react'
import Privilege from '../privilege/Privilege'

import Pin from '../content/icons/pin'
import Link from 'next/link'



const Filter = (props) => {

    const [mounted, setMounted] = useState(false);

    let section = props.section


    let data = props.data
    let house = props.house
    let porche = props.porche;
    let layouts = props.filteredLayouts.filter(item => item.house.title === house.title)

    let photo = 'https://files.citidom.com/' + data.photos[0].name

    let photos = data.photos.map(item => { return 'https://files.citidom.com/' + item.name })
    let photoIndex = props.photoIndex
    const [modalLayout, setModalLayout] = useState(null)
    let [modal, setModal] = useState(false)

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

    function flatsRow() {
        let flats = [];
        let count = 0;
        for (let x = 0; x < house.porches.length; x++) {
            let porche = x
            for (let i = 0; i < house.porches[porche].storeys.length; i++) {
                for (let j = 0; j < house.porches[porche].storeys[i].flats.length; j++) {
                    if (house.porches[porche].storeys[i].flats[j].price == '0') continue;
                    flats[count] = {}
                    flats[count].price = price1(house.porches[porche].storeys[i].flats[j].price)
                    flats[count].rooms = house.porches[porche].storeys[i].flats[j].rooms
                    if (flats[count].rooms == '0') flats[count].rooms = 'Студия'
                    else flats[count].rooms += ' комн.'
                    flats[count].spaceTotal = house.porches[porche].storeys[i].flats[j].spaceTotal + ' м²'
                    count++;
                }
            }
        }
        return (
            <div className={styles.content__flats_add}>
                {
                    flats.map((flat, index) => {
                        return <div key={index} className={styles.content__flats_add_flat}>
                            <div className={styles.content__flats_add_flat_image}>
                                <img src={photo} alt="" />
                            </div>
                            <div className={styles.content__flats_add_flat_info}>
                                {flat.rooms} {flat.spaceTotal}
                            </div>
                            <div className={styles.content__flats_add_flat_price}>
                                {flat.price} ₽
                            </div>
                        </div>

                    })
                }
            </div>
        )
    }

    if (!data) data = {

    }
    let flats = []

    function price(price) {
        if (price == "0") return ''
        return (price / 1000000).toFixed(1) + ' млн'
    }

    function price1(price) {
        // пробелы каждые 3 символа
        price = price.toString().split('').reverse()
        let res = ''
        for (let i = 0; i < price.length; i++) {
            if (i % 3 === 0 && i !== 0) res += ' '
            res += price[i]
        }
        return res.split('').reverse().join('')

    }

    while (!house || !house.porches[porche]) porche--
    if (!house) {
        porche = 0
        house = {
            porches: []
        }
    }

    for (let i = 0; i < house.porches[porche].storeys.length; i++) {
        flats.push({
            number: house.porches[porche].storeys[i].number,
            flats: []
        })
        for (let j = 0; j < house.porches[porche].storeys[i].flats.length; j++) {
            flats[i].flats[j] = price(house.porches[porche].storeys[i].flats[j].price)
        }
    }

    useEffect(() => {
        setMounted(true)
    }, [])

    function setFloats() {
        props.change("floats")
    }
    function setLayouts() {
        props.change("layouts")
    }

    function setHouse({ target }) {
        while (!target.id) target = target.parentNode
        let id = target.id.split("-")[1]
        target.parentNode.childNodes.forEach((item, i) => {
            if (!item.id.startsWith("house")) return;
            if (id === item.id.split('-')[1]) item.firstChild.className = styles.filter__button_primary
            else item.firstChild.className = styles.filter__button_secondary
        })
        props.setHouse(props.chess[parseInt(id)])
    }

    function setPorche(porche) {
        if (porche === "all") porche = '1'
        props.setPorche(parseInt(porche))
    }


    function filterLayouts(rooms) {
        if (rooms === "all") {
            props.filter(props.layouts)
            return;
        }
        if (rooms === "4") {
            let filtered = props.layouts.filter(layout => {
                return layout.rooms >= 4
            })
            props.filter(filtered)
            return;
        }
        let filtered = props.layouts.filter(layout => {
            return layout.rooms === parseInt(rooms)
        })
        props.filter(filtered)
    }

    return (
        <div className={styles.filter}>
            {mounted && <MediaQuery minWidth={768}>
                <div className={styles.filter__row}>
                    <button className={styles.filter__row_button} onClick={setFloats}>
                        <Checkerboard
                            selected={section == 'floats'}
                        /> Шахматка
                    </button>
                    <div className={styles.filter__row_vertical_divider}></div>
                    <button className={styles.filter__row_button} onClick={setLayouts}>
                        <Layouts
                            selected={section == 'layouts'}
                        /> Планировки
                    </button>
                </div>
                {
                    props.chess.map((house, index) => {
                        return <div id={"house-" + index} key={index} className={styles.filter__row} onClick={setHouse}>
                            <div className={index == 0 ? styles.filter__button_primary : styles.filter__button_secondary}>
                                {house.title}
                            </div>
                        </div>
                    })
                }


                <div className={styles.filter__horizontal_divider}></div>

                <div className={styles.filter__radio_row}>
                    <RadioGroup
                        name="entrance"
                        change={setPorche}
                        options={[
                            { value: 'all', label: 'Подъезд' },
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4' },
                            { value: '5', label: '5' }
                        ]}
                    />
                </div>
                <div id="floor-radio" className={styles.filter__radio_row}>
                    <RadioGroup
                        name="floor"
                        title="Комнатность"
                        change={filterLayouts}
                        options={[
                            { value: 'all', label: 'Все' },
                            { value: '0', label: 'Студия' },
                            { value: '1', label: '1' },
                            { value: '2', label: '2' },
                            { value: '3', label: '3' },
                            { value: '4', label: '4+' }
                        ]}
                    />
                </div>
            </MediaQuery>
            }
            {mounted && <MediaQuery maxWidth={767}>
                <Link href="/">
                    <div className={styles.filter__background_back}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                            <g filter="url(#filter0_b_133_2516)">
                                <rect x="0.161407" width="36" height="36" rx="6" fill="black" fillOpacity="0.4" />
                            </g>
                            <path d="M10.4543 17.2929C10.0638 17.6834 10.0638 18.3166 10.4543 18.7071L16.8183 25.0711C17.2088 25.4616 17.842 25.4616 18.2325 25.0711C18.623 24.6805 18.623 24.0474 18.2325 23.6569L12.5756 18L18.2325 12.3431C18.623 11.9526 18.623 11.3195 18.2325 10.9289C17.842 10.5384 17.2088 10.5384 16.8183 10.9289L10.4543 17.2929ZM28.6614 17L11.1614 17V19L28.6614 19V17Z" fill="white" />
                            <defs>
                                <filter id="filter0_b_133_2516" x="-3.83859" y="-4" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_133_2516" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_133_2516" result="shape" />
                                </filter>
                            </defs>
                        </svg>
                    </div>
                </Link>
                <div className={styles.filter__background_star}>

                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <g filter="url(#filter0_b_133_2515)">
                            <rect x="0.161377" width="36" height="36" rx="6" fill="black" fillOpacity="0.4" />
                        </g>
                        <path d="M18.8875 23.8797L18.5244 24.8115L18.8875 23.8797C18.4205 23.6977 17.9023 23.6977 17.4353 23.8797L12.4895 25.8067L12.7938 20.5075C12.8226 20.0071 12.6624 19.5143 12.3451 19.1264L8.98405 15.0181L14.118 13.67C14.6027 13.5427 15.022 13.2381 15.2928 12.8165L18.1614 8.35039L21.0299 12.8165C21.3008 13.2381 21.7201 13.5427 22.2048 13.67L27.3387 15.0181L23.9777 19.1264C23.6603 19.5143 23.5002 20.0071 23.5289 20.5075L23.8333 25.8067L18.8875 23.8797Z" stroke="white" strokeWidth="2" />
                        <defs>
                            <filter id="filter0_b_133_2515" x="-3.83862" y="-4" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_133_2515" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_133_2515" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                </div>
                <div className={styles.filter__background_upload}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                        <g filter="url(#filter0_b_133_2514)">
                            <rect x="0.411377" width="36" height="36" rx="6" fill="black" fillOpacity="0.4" />
                        </g>
                        <path d="M9.66138 21.0938V24.9687C9.66138 26.6256 11.0045 27.9687 12.6614 27.9687H24.1614C25.8182 27.9687 27.1614 26.6256 27.1614 24.9687V21.0938" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M19.1185 7.32414C18.728 6.93362 18.0948 6.93362 17.7043 7.32414L11.3403 13.6881C10.9498 14.0786 10.9498 14.7118 11.3403 15.1023C11.7308 15.4928 12.364 15.4928 12.7545 15.1023L18.4114 9.44546L24.0682 15.1023C24.4588 15.4928 25.0919 15.4928 25.4824 15.1023C25.873 14.7118 25.873 14.0786 25.4824 13.6881L19.1185 7.32414ZM19.4114 24.1563L19.4114 8.03125L17.4114 8.03125L17.4114 24.1562L19.4114 24.1563Z" fill="white" />
                        <defs>
                            <filter id="filter0_b_133_2514" x="-3.58862" y="-4" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_133_2514" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_133_2514" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                </div>
                <div className={styles.filter__background}>
                    <img src={photos[photoIndex]} alt="" />
                </div>
                <div className={styles.filter__photos_pagination}>
                    {
                        photos.map((item, index) => {
                            return <div onClick={() => {
                                props.setPhoto(index)
                            }} key={index} className={styles.filter__photos_pagination_item + ((photoIndex == index) ? (' ' + styles.filter__photos_pagination_item_selected) : '')}></div>
                        })
                    }
                </div>
                <div className={styles.content__title}>
                    <div className={styles.content__title_title}>
                        <Pin />
                        {data.title}
                    </div>
                    <div className={styles.item__flatscount}>
                        {data.flatsCount} {
                            data.flatsCount % 100 < 20 && data.flatsCount % 100 > 10 ? ' квартир' :
                                data.flatsCount % 10 === 1 ? ' квартира' :
                                    data.flatsCount % 10 < 5 && data.flatsCount % 10 > 0 ? ' квартиры' :
                                        ' квартир'
                        }


                    </div>
                </div>
                <div className={styles.content__address}>

                </div>
                <div className={styles.content__row_info}>
                    <div className={styles.content__row_info_item_light}>
                        {data.endConstruction}
                    </div>
                    <div className={styles.content__row_info_item}>
                        Ипотека от {data.mortgage}%*
                    </div>
                </div>
                <div className={styles.filter__privilege}>
                    <Privilege data={props.data} />
                </div>

                <div className={styles.filter__row}>
                    <div className={styles.filter__row_horisontal_divider_left}></div>
                    <button className={styles.filter__row_button} onClick={setFloats}>
                        <Checkerboard
                            selected={section == 'floats'}
                        /> Шахматка
                    </button>
                    <div className={styles.filter__row_vertical_divider}></div>
                    <button className={styles.filter__row_button} onClick={setLayouts}>
                        <Layouts
                            selected={section == 'layouts'}
                        /> Планировки
                    </button>
                    <div className={styles.filter__row_horisontal_divider_right}></div>
                </div>

                <div className={styles.filter__houses}>
                    {
                        props.chess.map((house, index) => {
                            return <div id={"house-" + index} key={index} className={styles.filter__row} onClick={setHouse}>
                                <div className={index == 0 ? styles.filter__button_primary : styles.filter__button_secondary}>
                                    {house.title} {house.endСonstruction ? house.endСonstruction : ''}
                                </div>
                            </div>
                        })
                    }
                </div>

                <div id="floor-radio" className={styles.filter__radio_row}>
                    <RadioGroup
                        name="floor"
                        change={filterLayouts}
                        options={[
                            { value: 'all', label: 'Все' },
                            { value: '0', label: 'Студия' },
                            { value: '1', label: '1 комн.' },
                            { value: '2', label: '2 комн.' },
                            { value: '3', label: '3 комн.' },
                            { value: '4', label: '4+ комн.' }
                        ]}
                    />
                </div>
                {section === 'floats' &&
                    <div className={styles.content__flats}>
                        {
                            flats.map((row, index) => {
                                return <div className={styles.content__flats_row} key={index}>
                                    <div className={styles.content__flats_wrapper}>
                                        <div className={styles.content__flats_index}>
                                            {row.number}
                                        </div>
                                        {
                                            row.flats.map((item, index) => {
                                                return (
                                                    <div className={styles.content__flats_item} key={index}>
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
                {
                    section === 'floats' && buttonsRow()
                }

                <div className={styles.filter__date_text}>
                    Внесён {(() => {
                        let date = new Date(data.createdAt)
                        return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
                    })()} Обновлён {(() => {
                        let date = new Date(data.updatedAt)
                        return date.getDate() + '.' + date.getMonth() + '.' + date.getFullYear()
                    })()}
                </div>

                <div className={styles.filter__flats_title}>
                    Квартиры от дольщиков в этом ЖК
                </div>

                {
                    flatsRow()
                }

                {
                    modal && <>
                        <div className={styles.content__modal}>
                            <div className={styles.content__modal_image}>
                                <img src={"https://files.citidom.com/" + modalLayout.layout} alt="" />
                            </div>
                            <div className={styles.content__modal_close} onClick={closeModal}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1.5 1.5L14.5 14.5" stroke="white" strokeWidth="2" />
                                    <path d="M14.5 1.5L1.5 14.5" stroke="white" strokeWidth="2" />
                                </svg>
                            </div>
                            <div className={styles.content__modal_star}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                    <g filter="url(#filter0_b_133_2698)">
                                        <rect x="0.579956" width="36" height="36" rx="6" fill="black" fillOpacity="0.24" />
                                    </g>
                                    <path d="M19.306 23.8797L18.943 24.8115L19.306 23.8797C18.8391 23.6977 18.3208 23.6977 17.8539 23.8797L12.9081 25.8067L13.2124 20.5075C13.2412 20.0071 13.081 19.5143 12.7637 19.1264L9.40263 15.0181L14.5366 13.67C15.0213 13.5427 15.4405 13.2381 15.7114 12.8165L18.58 8.35039L21.4485 12.8165C21.7194 13.2381 22.1386 13.5427 22.6234 13.67L27.7573 15.0181L24.3962 19.1264C24.0789 19.5143 23.9188 20.0071 23.9475 20.5075L24.2519 25.8067L19.306 23.8797Z" stroke="white" strokeWidth="2" />
                                    <defs>
                                        <filter id="filter0_b_133_2698" x="-3.42004" y="-4" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_133_2698" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_133_2698" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
                            </div>
                            <div className={styles.content__modal_upload}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="37" height="36" viewBox="0 0 37 36" fill="none">
                                    <g filter="url(#filter0_b_133_2697)">
                                        <rect x="0.829956" width="36" height="36" rx="6" fill="black" fillOpacity="0.24" />
                                    </g>
                                    <path d="M10.08 21.0938V24.9687C10.08 26.6256 11.4231 27.9687 13.08 27.9687H24.58C26.2368 27.9687 27.58 26.6256 27.58 24.9687V21.0938" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.5371 7.32414C19.1465 6.93362 18.5134 6.93362 18.1229 7.32414L11.7589 13.6881C11.3684 14.0786 11.3684 14.7118 11.7589 15.1023C12.1494 15.4928 12.7826 15.4928 13.1731 15.1023L18.83 9.44546L24.4868 15.1023C24.8773 15.4928 25.5105 15.4928 25.901 15.1023C26.2915 14.7118 26.2915 14.0786 25.901 13.6881L19.5371 7.32414ZM19.83 24.1563L19.83 8.03125L17.83 8.03125L17.83 24.1562L19.83 24.1563Z" fill="white" />
                                    <defs>
                                        <filter id="filter0_b_133_2697" x="-3.17004" y="-4" width="44" height="44" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_133_2697" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_133_2697" result="shape" />
                                        </filter>
                                    </defs>
                                </svg>
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
                                    {buttonsRow()}
                                </div>
                            </div>
                        </div>
                    </>
                }
            </MediaQuery>
            }
        </div>
    )
}



function buttonsRow() {
    return (
        <div className={styles.filter__call_buttons_row}>
            <div className={styles.filter__call_button_yellow}>
                Позвонить
            </div>
            <div className={styles.filter__call_button_black}>
                Заказать звонок
            </div>
        </div>
    )
}


export default Filter