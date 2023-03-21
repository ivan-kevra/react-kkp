import {ChangeEvent, useRef, useState} from "react";


export default {
    title: 'Input',
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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState('')
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.value)
    }

    return <input value={parentValue} onChange={onChange}/>
}

export const ControlledCheckBox = () => {
    const [parentValue, setParentValue] = useState(true)
    const onChange = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.checked)
    return <input type='checkbox' checked={parentValue} onChange={onChange}/>
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>(undefined)
    const onChange = (event: ChangeEvent<HTMLSelectElement>) => setParentValue(event.currentTarget.value)
    return <select value={parentValue} onChange={onChange}>
        <option>none</option>
        <option value={'1'}>Minsk</option>
        <option value={'2'}>Moscow</option>
        <option value={'3'}>Kiev</option>
    </select>
}
