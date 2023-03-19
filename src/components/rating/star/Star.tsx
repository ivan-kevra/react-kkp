import React from "react";
import {RatingValueType} from "../Rating";

type StarPropsType = {
    selected: boolean
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}
export const Star = (props: StarPropsType) => {

    const setRatingHandler = () => {
        props.onClick(props.value)
    }

    return <span onClick={setRatingHandler}>{props.selected ? <b>Star </b> : 'Star '}</span>

}