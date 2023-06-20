'use client';

import React, { useState, useRef } from 'react';
import { CSSTransition } from 'react-transition-group';
import styles from './filter.module.css'

import Image from 'next/image';



import Select from './components/select/Select';
import TextInput from './components/text_input/TextInput';
import RadioGroup from './components/radio_group/RadioGroup';
import FromTo from './components/fromto/FromTo';
import Switch from './components/switch/Switch';

const Filter = (props) => {

    const [isSectionOpened, setSectionOpened] = useState(true);
    const nodeRef = useRef(null);

    const toggleSectionHandler = () => {
        setSectionOpened(!isSectionOpened);
        console.log(isSectionOpened);
    }

    



    return (
        <div className={styles.filter}>
            <div className={styles.filter__in}>
                <div className={styles.filter__title}>Полный каталог новостроек Тюмени, с планировками ценами и самой полной информацией</div>
                <div className={styles.filter__form}>
                    <div className={styles.filter__form_section}>
                        <div className={styles.filter__row}>
                            <Select
                                title="Город"
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
                            <TextInput
                                value=""
                                type="text"
                                name="place"
                                title="Местоположение"
                                placeholder="Введите район или ЖК"
                            />
                            <TextInput
                                value=""
                                type="number"
                                name="payment"
                                title="Ваш комфортный платеж по ипотеке"
                                placeholder="Введите сумму платежа"
                            />
                            <RadioGroup
                                title="Ваш комфортный платеж по ипотеке"
                                options={[
                                    {
                                        value: 'studio',
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
                            <FromTo
                                title="Стоимость, ₽"
                                from_type="number"
                                from_name="price_from"
                                from_placeholder="От"
                                to_type="number"
                                to_name="price_to"
                                to_placeholder="До"
                            />
                            <FromTo
                                title="Площадь, м2"
                                from_type="number"
                                from_name="square_from"
                                from_placeholder="От"
                                to_type="number"
                                to_name="square_to"
                                to_placeholder="До"
                            />
                            <FromTo
                                title="Этаж"
                                from_type="number"
                                from_name="level_from"
                                from_placeholder="От"
                                to_type="number"
                                to_name="level_to"
                                to_placeholder="До"
                            />
                            <FromTo
                                title="Этажей в доме"
                                from_type="number"
                                from_name="levelness_from"
                                from_placeholder="От"
                                to_type="number"
                                to_name="levelness_to"
                                to_placeholder="До"
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
                            />
                            <FromTo
                                title="Стоимость, ₽"
                                from_type="number"
                                from_name="price_from"
                                from_placeholder="От"
                                to_type="number"
                                to_name="price_to"
                                to_placeholder="До"
                            />
                            <Switch
                                title="Многоуровневая"
                                name="multilevel"
                                value="multilevel"
                                isChecked={true}
                            />
                            <Switch
                                title="Не первый"
                                name="not_first"
                                value="not_first"
                                isChecked={false}
                            />
                            <Switch
                                title="Не последний"
                                name="not_last"
                                value="not_last"
                                isChecked={false}
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
                        <div className={styles.filter__columns}>
                            <div className={styles.filter__column}>
                                <Switch
                                    title="Кухня-гостинная"
                                    name="has_kitchen"
                                    value="has_kitchen"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                <Switch
                                    title="Витражные окна"
                                    name="vitrage_windows"
                                    value="vitrage_windows"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                <Switch
                                    title="Видеонаблюдение"
                                    name="video"
                                    value="video"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                
                                
                            </div>
                            <div className={styles.filter__column}>
                                <Switch
                                    title="Без обременения банка"
                                    name="without_bank"
                                    value="without_bank"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                <Switch
                                    title="Без несовершеннолетних собственников"
                                    name="without_teenagers"
                                    value="without_teenagers"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                <Switch
                                    title="Хайфлет"
                                    name="highflet"
                                    value="highflet"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                
                            </div>
                            <div className={styles.filter__column}>
                                <Switch
                                    title="Паркинг"
                                    name="has_parking"
                                    value="has_parking"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                <Switch
                                    title="Закрытая территория"
                                    name="closed_territory"
                                    value="closed_territory"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                                <Switch
                                    title="Рядом школа"
                                    name="school_around"
                                    value="school_around"
                                    isChecked={false}
                                    className={styles.filter__switch_mb}
                                />
                            </div>
                        </div>
                    </div>

                    <CSSTransition nodeRef={nodeRef} in={isSectionOpened} timeout={200} classNames="my-node">
                        <div ref={nodeRef}>
                        {"I'll receive my-node-* classes"}
                        </div>
                    </CSSTransition>
                </div>
            </div>
        </div>
    );
}

export default Filter;
