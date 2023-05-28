'use client';
import React, { useState, useEffect } from 'react';

import styles__filter from '../../filter.module.css'
// import styles__from_to from './from_to.module.css'


const FromTo = (props) => {

    const [from, setFrom] = useState(props.from);
    const [to, setTo] = useState(props.to);

    const handleInputFrom = (e) => {
        setFrom(e.target.value);
    }
    const handleInputTo = (e) => {
        setTo(e.target.value);
    }

    return (
        <div className={`${styles__filter.filter__field} ${styles__filter.filter__flexed}`}>
            <div className={styles__filter.filter__field_title}>{props.title}</div>
            <div className={styles__filter.filter__field_row}>
                <input
                    type={props.from_type}
                    value={from}
                    name={props.from_name}
                    onChange={handleInputFrom}
                    placeholder={props.from_placeholder}
                />                <input
                    type={props.to_type}
                    value={to}
                    name={props.to_name}
                    onChange={handleInputTo}
                    placeholder={props.to_placeholder}
                />
            </div>
        </div>
    );
}

export default FromTo;
