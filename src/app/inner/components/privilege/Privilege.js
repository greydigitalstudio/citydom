import styles from './privilege.module.css'

// icons
import CCTV from './icons/cctv'
import BesidePreSchool from './icons/BesidePreSchool'
import BesideSchool from './icons/BesideSchool'
import ClosedArea from './icons/ClosedArea'
import Parking from './icons/Parking'
import ProtectedArea from './icons/ProtectedArea'


const Privilege = () => {
  return (
    <div className={styles.privilege}>
        <div className={styles.privilege_wrapper}>
            <div className={styles.privilege__item}>
                <CCTV /> Видеонаблюдение
            </div>
            <div className={styles.privilege__item}>
                <BesidePreSchool /> Рядом детский сад
            </div>
            <div className={styles.privilege__item}>
                <BesideSchool /> Рядом школа
            </div>
            <div className={styles.privilege__item}>
                <ClosedArea /> Закрытая территория
            </div>
            <div className={styles.privilege__item}>
                <Parking /> Парковка
            </div>
            <div className={styles.privilege__item}>
                <ProtectedArea /> Охраняемая территория
            </div>
        </div>
    </div>
  )
}

export default Privilege