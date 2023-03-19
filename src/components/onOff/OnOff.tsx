import React from 'react';

type PropsType = {
    on: boolean
    onClick: (on: boolean) => void
}
const OnOff = (props: PropsType) => {

    const onClicked = () => props.onClick(true)
    const offClicked = () => props.onClick(false)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline',
        padding: '2px',
        backgroundColor: props.on ? 'green' : ''
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? '' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '15px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '5px',
        padding: '2px',
        backgroundColor: props.on ? 'green' : 'red'
    }

    return (
        <div>
            <div style={onStyle} onClick={onClicked}>On</div>
            <div style={offStyle} onClick={offClicked}>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    );
};

export default OnOff;