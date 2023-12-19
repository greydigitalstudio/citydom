import PhoneForm from '../phone_form/PhoneForm'

import styles from './consultation.module.css'

import Phone from './icons/phone'
let image = 'https://i.ibb.co/yn1bHhV/accountant-in-office-2-1.png'

const Consultation = ({data}) => {
  return (
    <div className={styles.consultation}>
        <div className={styles.consultation__wrapper}>
            <div className={styles.consultation__image}>
                <img src={image} alt="accountant-in-office-2-1" border="0"/>
            </div>

            <div className={styles.consultation__content}>
                <div className={styles.consultation__text}>
                    Проконсультирую и помогу купить с выгодой  и без комиссии
                </div>
                <a href={`tel: +7${data?.owner?.phone}`} className={styles.consultation__text_bold}>
                    <Phone /> {`+7${data?.owner?.phone}`}
                </a>
                <div className={styles.consultation__text}>
                    или оставьте номер я позвоню вам через 2 мминуты
                </div>
            </div>

            <PhoneForm 
                placeholder="+7 XXX XXX XX XX"
                options={[
                    { value: 'ru', label: '🇷🇺' },
                    { value: 'ru', label: '🇷🇺' },
                    { value: 'ru', label: '🇷🇺' }
                ]}
            />

            <div className={styles.consultation__button}>
                Позвони мне
            </div>
        </div>
    </div>
  )
}

export default Consultation