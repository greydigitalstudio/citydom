'use client';
import React, { useState, useEffect } from 'react';

import styles__filter from '../../filter.module.css'
// import styles__select from './select.module.css'


const SelectMenu = (props) => {

    const [selected, setSelected] = useState(props.options[0].value);

    const handleChange = ({ target }) => {
        setSelected(target.value);
    }

    return (
        <label className={styles__filter.filter__field}>
            <select
                className={styles__filter.filter__field_item}
                value={selected}
                onChange={handleChange}
            >
                {props.options.map(({ value, label }, index) => <option key={index} value={value} >{label}</option>)}
            </select>
        </label>
    );
}

export default SelectMenu;
