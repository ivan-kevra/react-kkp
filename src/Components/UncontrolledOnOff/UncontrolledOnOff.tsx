import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

type OnOffPropsType = {}

export const UncontrolledOnOff: React.FC<OnOffPropsType> = (props) => {
    let [on, setOn] = useState(false)
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '2px',
        backgroundColor: on ? 'green' : 'white',
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '2px',
        backgroundColor: on ? 'white' : 'red',
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '2px',
        padding: '5px',
        backgroundColor: on ? 'green' : 'red',
    }
    const onClickHandler = () => {
        setOn(!on)
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

