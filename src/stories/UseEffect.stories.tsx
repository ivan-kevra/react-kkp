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
        document.title = counter.toString()
    },)
    useEffect(() => {
        console.log('only first render = analog componentDidMount')
        document.title = counter.toString()
    }, [])
    useEffect(() => {
        console.log('first render and very counter changed')
        document.title = counter.toString()
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

export const SetTimeOutExample = () => {

    const [time, setTime] = useState(new Date());


    useEffect(() => {
        setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, [time])


    return <div>
        <h1>Текущее время:</h1>
        <h2>{time.toLocaleTimeString()}</h2>
    </div>
}
