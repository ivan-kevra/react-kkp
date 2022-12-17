import React, {useState} from "react";


export const UncontrolledRating = () => {
let [value, setValue] = useState(0)

    return (
        <div>
            <Star selected={value > 0}/> <button onClick={(value)=>{setValue(1)}}>1</button>
            <Star selected={value > 1}/> <button onClick={(value)=>{setValue(2)}}>2</button>
            <Star selected={value > 2}/> <button onClick={(value)=>{setValue(3)}}>3</button>
            <Star selected={value > 3}/> <button onClick={(value)=>{setValue(4)}}>4</button>
            <Star selected={value > 4}/> <button onClick={(value)=>{setValue(5)}}>5</button>
        </div>
    )
}

type StarPropsType = {
    selected: boolean
}

const Star = (props: StarPropsType) => {
    if (props.selected === true) {
        return <span><b>Star </b></span>
    } else {
        return <span>Star </span>
    }
}
