import React, {useMemo, useState} from "react";

function generateData() {
    console.log('generate Data')
    return 1;
}

export const Example1 = () => {

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)
    return <>
        <button onClick={() => setCounter((state) => state + 1)}>+</button>
        {counter}
    </>
}

export default {
    title: 'useState demo',
    component: Example1
}
