import React, {useEffect, useMemo, useState} from "react";

function generateData() {
    console.log('generate Data')
    return 1;
}

export const Example1 = () => {

    const [counter, setCounter] = useState(1)
    const [fake, setFake] = useState(1)

    console.log('SimpleExample')

    useEffect(() => {
        console.log('every render')
    },)
    useEffect(() => {
        console.log('only first render = analog componentDidMount')
    }, [])
    useEffect(() => {
        console.log('first render and very counter changed')
    }, [counter])

    return <>
        {counter}
        <button onClick={() => setFake(fake + 1)}>fake +</button>
        <button onClick={() => setCounter(counter + 1)}>counter +</button>

    </>
}

export default {
    title: 'useEffect demo',
    component: Example1
}
