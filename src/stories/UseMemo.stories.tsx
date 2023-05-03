import React, {useMemo, useState} from "react";
import {Select} from "../components/select/Select";


export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(3)
    const [b, setB] = useState<number>(4)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1
        for (let i = 1; i <= a; i++) {
            tempResultA = tempResultA * i
        }
        return tempResultA
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i
    }

    return <>
        <input value={a} onChange={(event) => setA(+event.currentTarget.value)}/>
        <input value={b} onChange={(event) => setB(+event.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}


const Users = React.memo((props: { users: Array<string> }) => {
    console.log('users')
    return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
})

export const HelpsToReactMemo = () => {
    console.log('Helps to react memo')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['valera', 'user', 'dima'])

    const addUser = () => {
        setUsers([...users, 'new user'])
    }

    const newArray = useMemo(() => {
        return users.filter((user) => user.toLowerCase().indexOf('a') > -1)
    }, [users])


    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Users users={newArray}></Users>
    </>
}

export const SelectMemo = () => {
    const cities = [
        {value: '1', title: 'Minsk', country: 'Belarus', population: 100},
        {value: '2', title: 'Moscow', country: 'Russia', population: 200},
        {value: '3', title: 'Kiev', country: 'Ukraine', population: 300},
        {value: '4', title: 'Grodno', country: 'Belarus', population: 400},
        {value: '5', title: 'Smolensk', country: 'Russia', population: 500},
        {value: '6', title: 'Odessa', country: 'Ukraine', population: 600},
    ]
    const [value, setValue] = useState('2')
    const [value1, setValue1] = useState('2')
    const [value2, setValue2] = useState('2')
    const filteredLetterCities = useMemo(() => {
        return cities.filter((city) => city.title.toLowerCase().indexOf('m') > -1)
    }, [cities])
    const filteredPopulationCities = useMemo(() => {
        return cities.filter((city) => city.population > 300)
    }, [cities])
    const filteredCountryCities = useMemo(() => {
        return cities.filter((city) => city.country === 'Belarus')
    }, [cities])

    const [counter, setCounter] = useState(0)

    return <div>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        {counter}
        <Select onChange={setValue} items={filteredLetterCities} value={value}/>
        <Select onChange={setValue1} items={filteredPopulationCities} value={value1}/>
        <Select onChange={setValue2} items={filteredCountryCities} value={value2}/>


    </div>
}

export default {
    title: 'useMemo demo',
}


