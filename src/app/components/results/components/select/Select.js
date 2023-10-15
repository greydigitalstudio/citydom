'use client';
import React, { useState, useEffect } from 'react';

import styles from './select.module.css'


const SelectMenu = (props) => {

    const [selected, setSelected] = useState(props.options[0].value);

    const handleChange = ({ target }) => {
        setSelected(target.value);
        props.change({ target })
    }

    return (
        <label className={styles.filter__field}>
            <select
                className={styles.filter__field_item}
                value={selected}
                onChange={handleChange}
            >
                {props.options.map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}
            </select>
        </label>
    );
}

export default SelectMenu;
