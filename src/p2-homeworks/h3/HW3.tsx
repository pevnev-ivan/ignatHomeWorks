import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import s from './Greeting.module.css'
// types
export type UserType = {
    _id: number
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<any>([]) // need to fix any

    const addUserCallback = (name: string) => { // need to fix any
        setUsers([]) // need to fix
    }

    return (
        <div >
            <h1>HomeWork 3</h1>
    <div className={s.HomeWork3}>


            {/*should work (должно работать)*/}
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>


            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
    </div>
        </div>
    )
}

export default HW3
