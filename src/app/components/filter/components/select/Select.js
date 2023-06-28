'use client';
import React, { useState, useEffect } from 'react';

import styles__filter from '../../filter.module.css'
// import styles__select from './select.module.css'


const Select = (props) => {


    const [selected, setSelected] = useState(props.value ?? props.options[0].value);

    const handleChange = ({ target }) => {
        setSelected(target.value);
        if(props.onChange)
            props.onChange({ target })
    }

    useEffect(() => {
        if(props.value == '') props.value = props.options[0].value;
        setSelected(props.value);
    }, [props.value])

    return (
        <label className={styles__filter.filter__field}>
            <div className={styles__filter.filter__field_title}>{props.title}</div>
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

export default Select;
