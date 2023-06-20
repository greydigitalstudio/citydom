'use client';
import React, { useState } from 'react';
import styles__radio_group from './radio_group.module.css'


const RadioGroup = (props) => {

    const [selected_radio, setSelected_radio] = useState('');

    const handleChange = ({ target }) => {
        setSelected_radio(target.value);
        props.change(target.value)
    }

    return (
        <div className={styles__radio_group.filter__field}>
            <div className={styles__radio_group.filter__field_title}>{props.title}</div>
            <div className={styles__radio_group.radio_group}>
                {props.options.map(({ value, label }, index) => 
                    <label className={styles__radio_group.radio_group__label} key={index}>
                        <input type="radio" name="rooms" value={value} onChange={handleChange} />
                        <div className={styles__radio_group.radio_group_item}>
                            {label}
                        </div>
                    </label>
                )}
            </div>
        </div>
    );
}

export default RadioGroup;
