'use client';
import React, { useState, useEffect } from 'react';

import styles__filter from '../../filter.module.css'
import styles__checkbox from './checkbox.module.css'


const Checkbox = (props) => {

    const [checked, setChecked] = useState(props.isChecked);

    const handleChange = (e) => {
        
        if(props.change)
            props.change(!checked)
        setChecked(!checked);
    }

    useEffect(() => {
        let checked = props.isChecked
        if(props.isChecked == '' || props.isChecked == undefined)
        checked = false;
        setChecked(checked);
    }, [props.isChecked])

    return (
        <div className={`${styles__filter.filter__field} ${styles__filter.filter__flexed} ${props.className}`}>
            <label className={styles__checkbox.filter__checkbox}>
                <div className={styles__checkbox.checkbox + " " + styles__checkbox.style_c}>
                    <input
                        type='checkbox'
                        value={props.value}
                        name={props.name}
                        onChange={handleChange}
                        title={props.title}
                        checked={checked}
                    />
                    <div className={styles__checkbox.checkbox__checkmark}></div>
                    <div className={styles__checkbox.checkbox__body}>{props.title}</div>
                </div>
            </label>
        </div>
    );
}

export default Checkbox;
