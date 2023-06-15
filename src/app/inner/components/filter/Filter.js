import styles from './filter.module.css'
import RadioGroup from '../radio_group/RadioGroup'

// icons
import Checkerboard from './icons/Checkerboard'
import Layouts from './icons/Layouts'


const Filter = () => {
  return (
    <div className={styles.filter}>
        <div className={styles.filter__row}>
            <div className={styles.filter__row_button}>
                <Checkerboard/> Шахматка 
            </div>
            <div className={styles.filter__row_vertical_divider}></div>
            <div className={styles.filter__row_button}>
                <Layouts/> Планировки
            </div>
        </div>
        <div className={styles.filter__row}>
            <div className={styles.filter__button_primary}>
                Квартал Строителя, 4кв. 2024г.
            </div>
        </div>
        <div className={styles.filter__row}>
            <div className={styles.filter__button_secondary}>
                    Квартал Строителя, 4кв. 2024г.
            </div>
        </div>
        <div className={styles.filter__horizontal_divider}></div>

        <div className={styles.filter__radio_row}>
            <RadioGroup
                name="entrance"
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
                options={[
                    { value: 'all', label: 'Все' },
                    { value: 'studio', label: 'Студия' },
                    { value: '1', label: '1' },
                    { value: '2', label: '2' },
                    { value: '3', label: '3' },
                    { value: '4', label: '4+' }
                ]}
            />
        </div>

    </div>
  )
}

export default Filter