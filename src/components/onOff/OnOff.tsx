import React from 'react';
import style from './OnOff.module.css'

type PropsType = {
    selected: boolean
}
const OnOff = (props: PropsType) => {
    return (
        <div>
            <span className={props.selected ? style.on : ''}>On </span>
            <span className={props.selected ? '' : style.off}>Off </span>
            <span className={props.selected ? style.on : style.off}>O</span>
        </div>
    );
};

export default OnOff;