import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'
import {v1} from "uuid"


export type UserType = {
    _id: string
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<Array<UserType>>([])

    const addUserCallback = (name: string) => {
        const newUser: UserType =
            {
                _id: v1(),
                name: name
            }
        setUsers([newUser, ...users])
    }

    return (
        <div>
            <h1>HomeWork 3</h1>
            <div className={s.HomeWork3}>

                <GreetingContainer users={users} addUserCallback={addUserCallback}/>
                {/*<AlternativeGreeting/>*/}

            </div>
        </div>
    )
}

export default HW3
