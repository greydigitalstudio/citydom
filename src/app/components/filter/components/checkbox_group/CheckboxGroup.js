'use client';
import React, { useEffect, useState } from 'react';

import styles__filter from '../../filter.module.css'
import styles__checkbox_group from './checkbox_group.module.css'


const CheckboxGroup = (props) => {

    const [selected_checkbox, setSelected_checkbox] = useState('');

    const handleChange = ({ target }) => {
        setSelected_checkbox(target.value);
        if(props.onChange)
            props.onChange({ target })
    }

    useEffect(() => {
        setSelected_checkbox(props.value);
    }, [props.value])  

    return (
        <div className={styles__filter.filter__field}>
            <div className={styles__filter.filter__field_title}>{props.title}</div>
            <div className={styles__checkbox_group.checkbox_group}>
                {props.options.map(({ value, label }, index) => 
                    <label className={styles__checkbox_group.checkbox_group__label} key={index}>
                        <input checked={selected_checkbox == value} type="checkbox" name="rooms" value={value} onChange={handleChange} />
                        <div className={styles__checkbox_group.checkbox_group_item}>
                            {label}
                        </div>
                    </label>
                )}
            </div>
        </div>
    );
}

export default CheckboxGroup;
