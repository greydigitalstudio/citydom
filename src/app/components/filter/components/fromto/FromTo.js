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
            <div className={styles__filter.filter__field_title}>{props.title} {from} {to}</div>
            <div className={styles__filter.filter__field_row}>
                <input
                    type='text'
                    value={from}
                    name={props.name}
                    onChange={handleInputFrom}
                    placeholder={props.placeholder}
                />
                <input
                    type='text'
                    value={to}
                    name={props.name}
                    onChange={handleInputTo}
                    placeholder={props.placeholder}
                />
            </div>
        </div>
    );
}

export default FromTo;
