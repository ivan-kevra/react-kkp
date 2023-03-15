import React, {useState} from "react";

type RatingPropsType = {}

export const UncontrolledRating = (props: RatingPropsType) => {

    const [value, setValue] = useState(3)

    return (
        <div>
            <Star selected={value > 0} setRating={() => setValue(1)}/>
            <Star selected={value > 1} setRating={() => setValue(2)}/>
            <Star selected={value > 2} setRating={() => setValue(3)}/>
            <Star selected={value > 3} setRating={() => setValue(4)}/>
            <Star selected={value > 4} setRating={() => setValue(5)}/>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
    setRating: () => void
}
const Star = (props: StarPropsType) => {

    return <span onClick={props.setRating}>{props.selected ? <b>Star </b> : 'Star '}</span>

}