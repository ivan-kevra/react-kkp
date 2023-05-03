import React from "react";
import {ItemType} from "../../../App";

type AccordionBodyPropsType = {
    users: Array<ItemType>
    onItemClick: (value: any) => void
}

export const AccordionBody = React.memo((props: AccordionBodyPropsType) => {

    return <ul>
        {props.users
            ? <span>
                {props.users.map((user) => {
                        const setUserHandler = () => props.onItemClick(user.value)
                        return <li key={user.value} onClick={setUserHandler}>{user.title}</li>
                    }
                )}
              </span>
            : <li>empty list</li>}
    </ul>
})