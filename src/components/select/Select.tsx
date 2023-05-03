import React, {KeyboardEvent, useEffect, useState} from 'react';
import {ItemType} from "../../App";
import style from './Select.module.css'

type SelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemType[]
}

export const Select = (props: SelectPropsType) => {

    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(user => user.value === props.value)
    const hoveredItem = props.items.find(user => user.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value);
        toggleItems()
    }

    const onKeyUp = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
            for (let i = 0; i < props.items.length; i++) {
                if (props.items[i].value === hoveredElementValue) {
                    const nextElement = event.key === 'ArrowDown'
                        ? props.items[i + 1]
                        : props.items[i - 1]
                    if (nextElement) {
                        props.onChange(nextElement.value)
                        return
                    }
                }
            }
            if (!selectedItem) {
                props.onChange(props.items[0].value)
            }
        }
        if (!selectedItem) {
            props.onChange(props.items[0].value)
        }
        if (event.key === 'Enter' || event.key === 'Escape') {
            setActive(false)
        }
    }

    return (
        <div>
            <div className={style.select} onKeyUp={onKeyUp} tabIndex={0}>
                <span className={style.main} onClick={toggleItems}>
                    {selectedItem && selectedItem.title}</span>
                {active &&
                    <div className={style.items}>
                        {props.items.map((item) => <div
                            onMouseEnter={() => setHoveredElementValue(item.value)}
                            className={style.item + ' ' + (hoveredItem === item ? style.selected : '')}
                            key={item.value}
                            onClick={() => onItemClick(item.value)}
                        >{item.title}</div>)}
                    </div>}
            </div>
        </div>


    );
};

