import React, {useState} from 'react';

type PropsType = {}
const OnOff = (props: PropsType) => {

    const [on, setOn] = useState(true)

    const setOnHandler = () => setOn(true)
    const setOffHandler = () => setOn(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        padding: '2px',
        backgroundColor: on ? 'green' : ''
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? '' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={setOnHandler}>On</div>
            <div style={offStyle} onClick={setOffHandler}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;