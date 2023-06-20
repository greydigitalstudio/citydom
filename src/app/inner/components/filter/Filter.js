import styles from './filter.module.css'
import RadioGroup from '../radio_group/RadioGroup'

// icons
import Checkerboard from './icons/Checkerboard'
import Layouts from './icons/Layouts'


let inicialized = []



const Filter = (props) => {

    function setFloats() {
        props.change("floats")
    }
    function setLayouts() {
        props.change("layouts")
    }

    function setHouse({ target }) {
        while(!target.id) target = target.parentNode
        let id = target.id.split("-")[1]
        target.parentNode.childNodes.forEach((item, i) => {
            if(!item.id.startsWith("house")) return;
            if(id === item.id.split('-')[1]) item.firstChild.className = styles.filter__button_primary
            else item.firstChild.className = styles.filter__button_secondary
        })
        props.setHouse(props.chess[parseInt(id)])
    }

    function setPorche(porche) {
        if(porche === "all") porche = '1'
        props.setPorche(parseInt(porche))
    }


    function filterLayouts(rooms) {
        if(rooms === "all") {
            props.filter(props.layouts)
            return;
        }
        if( rooms === "4" ) {
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
        <div className={styles.filter__row}>
            <button className={styles.filter__row_button} onClick={setFloats}>
                <Checkerboard/> Шахматка 
            </button>
            <div className={styles.filter__row_vertical_divider}></div>
            <button className={styles.filter__row_button} onClick={setLayouts}>
                <Layouts/> Планировки
            </button>
        </div>
 {
    props.chess.map((house, index) => {
        return <div id={"house-" + index} className={styles.filter__row} onClick={setHouse}>
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

    </div>
  )
}

export default Filter