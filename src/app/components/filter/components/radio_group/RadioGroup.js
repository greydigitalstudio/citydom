'use client';
import React, { useEffect, useState } from 'react';

import styles__filter from '../../filter.module.css'
import styles__radio_group from './radio_group.module.css'


const RadioGroup = (props) => {

    const [selected_radio, setSelected_radio] = useState('');

    const handleChange = ({ target }) => {
        setSelected_radio(target.value);
        if(props.onChange)
            props.onChange({ target })
    }

    useEffect(() => {
        setSelected_radio(props.value);
    }, [props.value])  

    return (
        <div className={styles__filter.filter__field}>
            <div className={styles__filter.filter__field_title}>{props.title}</div>
            <div className={styles__radio_group.radio_group}>
                {props.options.map(({ value, label }, index) => 
                    <label className={styles__radio_group.radio_group__label} key={index}>
                        <input checked={selected_radio == value} type="radio" name="rooms" value={value} onChange={handleChange} />
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
