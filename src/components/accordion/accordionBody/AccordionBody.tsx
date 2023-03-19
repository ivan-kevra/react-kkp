import React from "react";
import {UserType} from "../../../App";

type AccordionBodyPropsType = {
    users: Array<UserType>
}

export const AccordionBody = (props: AccordionBodyPropsType) => {
    return <ul>
        {props.users
            ? <span>{props.users.map((user) => <li>{user.user}</li>)}</span>
            : <li>empty list</li>}
    </ul>
}