import React, {useState} from "react";

const NewMessagesCounter = (props: any) => {
    return <div>{props.count}</div>
}

const Users = React.memo((props: { users: Array<string> }) => {
    console.log('users')
    return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
})

export const Example1 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['user 1', 'user 2', 'user 3'])
    const addUser = () => {
        setUsers([...users, 'new user'])
    }
    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}></Users>
    </>
}

export default {
    title: 'React.memo demo',
    component: Example1
}
