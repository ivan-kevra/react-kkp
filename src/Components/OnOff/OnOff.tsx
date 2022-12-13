import React from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    selected: boolean
}

export const OnOff = (props: OnOffPropsType) => {
    if (props.selected === true) {
        return (
            <div className={s.body}>
                <div className={s.on}>On</div>
                <div>Off</div>
                <div className={s.on}>X</div>
            </div>
        );
    } else {
        return (
            <div className={s.body}>
                <div>On</div>
                <div className={s.off}>Off</div>
                <div className={s.off}>X</div>
            </div>
        );
    }

};

