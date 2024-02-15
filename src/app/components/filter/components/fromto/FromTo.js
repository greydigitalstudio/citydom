'use client';
import React, { useState, useEffect } from 'react';
import { NumericFormat } from 'react-number-format';

import styles__filter from '../../filter.module.css'
import styles__from_to from './fromto.module.css'


const FromTo = (props) => {
    const [from, setFrom] = useState(props.from);
    const [to, setTo] = useState(props.to);

    /*function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }*/

    const handleInputFrom = (e) => {
        setFrom(e.target.value);
        if(props.changeFrom)
            props.changeFrom(e)
    }
    const handleInputTo = (e) => {
        setTo(e.target.value);
        if(props.changeTo)
            props.changeTo(e)
    }

    useEffect(() => {
        if(!props.from) setFrom('');
        else setFrom(props.from);
        if(!props.to) setTo('');
        else setTo(props.to);
    }, [props.from, props.to])

    return (
        <div className={`${styles__filter.filter__field} ${styles__filter.filter__flexed} ${styles__from_to.from_to}`}>
            <div className={styles__filter.filter__field_title}>{props.title}</div>
            <div className={styles__filter.filter__field_row}>
                <NumericFormat name={props.from_name} value={from} displayType={props.from_type} thousandSeparator={' '} placeholder={props.from_placeholder} onChange={handleInputFrom} />
                <NumericFormat name={props.to_name} value={to} displayType={props.to_type} thousandSeparator={' '} placeholder={props.to_placeholder} onChange={handleInputTo} />
            </div>
        </div>
    );
}

export default FromTo;
