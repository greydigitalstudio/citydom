import React from 'react';
import styles from './filter.module.css'



import Select from './components/select/Select';
import TextInput from './components/text_input/TextInput';
import RadioGroup from './components/radio_group/RadioGroup';
import FromTo from './components/fromto/FromTo';

const Filter = () => {
    return (
        <div className={styles.filter}>
            <div className={styles.filter__in}>
                <div className={styles.filter__title}>Полный каталог новостроек Тюмени, с планировками ценами и самой полной информацией</div>
                <div className={styles.filter__form}>
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
                        <FromTo />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Filter;
