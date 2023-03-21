import {Input} from "./Input";
import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'Input',
    // component: Input,
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }
    return <>
        <input onChange={onChange}/>
        - {value}
    </>
}

export const GetValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>save</button>
        - {value} </>
}

export const ControlledInputWithFixedValue = () => <input value={'fixed value'}/>
