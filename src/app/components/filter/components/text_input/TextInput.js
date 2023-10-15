'use client';
import React, { useState, useEffect } from 'react';

import styles__filter from '../../filter.module.css'
// import styles__select from './select.module.css'

const TextInput = (props) => {
    const [value, setValue] = useState(props.value);

    useEffect(() => {
        if(!props.value) setValue('')
        else setValue(props.value);
    }, [props.value])

    const handleInput = (e) => {
        setValue(e.target.value);
        if(props.onChange)
            props.onChange(e)
    }

    return (
        <label className={`${styles__filter.filter__field} ${styles__filter.filter__flexed} ${styles__filter.filter__text_input}`}>
            <div className={styles__filter.filter__field_title}>{props.title}</div>
            <input
                type={props.type}
                className={styles__filter.filter__field_item}
                value={value}
                name={props.name}
                onChange={handleInput}
                placeholder={props.placeholder}
            />
        </label>
    );
}

export default TextInput;
