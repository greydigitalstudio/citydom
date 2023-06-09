'use client';
import React, { useState, useEffect } from 'react';

import styles__filter from '../../filter.module.css'
import styles__switch from './switch.module.css'


const Switch = (props) => {

    const [checked, setChecked] = useState(props.isChecked);

    const handleChange = (e) => {
        console.log(e.target.value);
        setChecked(!checked);
    }

    return (
        <div className={`${styles__filter.filter__field} ${styles__filter.filter__flexed} ${props.className}`}>
            <label className={styles__switch.filter__switch}>
                <div className={styles__switch.filter__switch_left}>
                    <input
                        type='checkbox'
                        value={props.value}
                        name={props.name}
                        onChange={handleChange}
                        checked={checked}
                    />
                    <div className={styles__switch.switch}>
                        <div className={styles__switch.switch_circle}></div>
                    </div>
                </div>
                <div className={styles__switch.filter__switch_right}>{props.title}</div>
            </label>
        </div>
    );
}

export default Switch;
