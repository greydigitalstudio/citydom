import styles from './privilege.module.css'

// icons
import CCTV from './icons/cctv'
import BesidePreSchool from './icons/BesidePreSchool'
import BesideSchool from './icons/BesideSchool'
import ClosedArea from './icons/ClosedArea'
import Parking from './icons/Parking'
import ProtectedArea from './icons/ProtectedArea'


const Privilege = (props) => {
    let data = props.data
  return (
    <div className={styles.privilege}>
        <div className={styles.privilege_wrapper}>
            { props.data?.hasCctv &&
            <div className={styles.privilege__item}>
                <CCTV /> Видеонаблюдение
            </div>
            }
            { props.data?.hasBesidePreSchool &&
            <div className={styles.privilege__item}>
                <BesidePreSchool /> Рядом детский сад
            </div>
            }
            { props.data?.hasBesideSchool &&
            <div className={styles.privilege__item}>
                <BesideSchool /> Рядом школа
            </div>
            }
            { props.data?.isClosedArea &&
            <div className={styles.privilege__item}>
                <ClosedArea /> Закрытая территория
            </div>
            }
            { (props.data?.hasGroundParking || props.data?.hasUndergroundParking || props.data?.hasBesidePark) &&
            <div className={styles.privilege__item}>
                <Parking /> Парковка
            </div>
            }
            { props.data?.isProtectedArea &&
            <div className={styles.privilege__item}>
                <ProtectedArea /> Охраняемая территория
            </div>
            }
        </div>
    </div>
  )
}

export default Privilege