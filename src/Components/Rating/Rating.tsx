import React from "react";
import {ValuesType} from "../../App";

export type RatingPropsType = {
    value: ValuesType
    onClick: (value: ValuesType) => void
}

export const Rating = (props: RatingPropsType) => {

    return (
        <div>
            <Star selected={props.value > 0} onClick={props.onClick} value={1}/>
            <Star selected={props.value > 1} onClick={props.onClick} value={2}/>
            <Star selected={props.value > 2} onClick={props.onClick} value={3}/>
            <Star selected={props.value > 3} onClick={props.onClick} value={4}/>
            <Star selected={props.value > 4} onClick={props.onClick} value={5}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    onClick: (value: ValuesType) => void
    value: ValuesType
}

const Star = (props: StarPropsType) => {

    const onClickHandler = () => {
        props.onClick(props.value)
    }

    return <span onClick={onClickHandler}>
        {props.selected ? <b>star </b> : 'star '}
    </span>
}
