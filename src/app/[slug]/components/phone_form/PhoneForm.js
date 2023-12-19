'use client';
import React, { useState, useEffect } from 'react';
import styles from './phoneform.module.css'
import './notoemoji.css'



const PhoneForm = (props) => {

    const [value, setValue] = useState(props.value);

    const handleInput = (e) => {
        setValue(e.target.value);
    }

    const [selected, setSelected] = useState(props.options[0].value);

    const handleChange = ({ target }) => {
        setSelected(target.value);
    }

    return (
        <div className={styles.phoneform}>
            <label className={`${styles.filter__field} ${styles.filter__flexed}`}>
                <div className={styles.filter__field_title}>{props.title}</div>
                <input
                    type={props.type}
                    className={styles.filter__field_item}
                    value={value}
                    name={props.name}
                    onChange={handleInput}
                    placeholder={props.placeholder}
                />
            </label>
        </div>
    );
}

export default PhoneForm;
