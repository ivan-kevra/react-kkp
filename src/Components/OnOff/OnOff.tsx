import React, {useState} from 'react';
import s from './OnOff.module.css'

type OnOffPropsType = {
    on: boolean
    onChange: (on: boolean) => void
}

export const OnOff: React.FC<OnOffPropsType> = (props) => {

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: props.on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'red',
    }
    const onClickHandler = () => {
        props.onChange(!props.on)
    }
    {
        return (
            <div className={s.body}>
                <div style={onStyle} onClick={onClickHandler}>On</div>
                <div style={offStyle} onClick={onClickHandler}>Off</div>
                <div style={indicatorStyle}></div>
            </div>
        );
    }

};

