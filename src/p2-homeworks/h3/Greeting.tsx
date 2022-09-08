import React, {ChangeEvent, KeyboardEvent} from 'react'
import s from './Greeting.module.css'
import {UserType} from "./HW3";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import SuperInputText from "../h4/common/c1-SuperInputText/SuperInputText";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: () => void // need to fix any
    error: boolean // need to fix any
    totalUsers: number
    users: Array<UserType>
    onKeyAddUser: (e: KeyboardEvent<HTMLInputElement>) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users, onKeyAddUser} // деструктуризация пропсов
) => {
    const inputClass = error ? s.Greeting__inpt : s.error // need to fix with (?:)

    const usersList = users.map((objFromUser: { name: React.ReactNode }, index: any) => {
        return (
            <div id={index}>
                {objFromUser.name}
            </div>
        )
    })

    return (<div className={s.Greeting__Container}>


                <div>
                    <SuperButton className={s.Greeting__btn}  onClick={addUser}>add</SuperButton>
                    <span> Users Count: {totalUsers}</span>
                </div>


                <SuperInputText  value={name} onChange={setNameCallback} className={inputClass} onKeyDown={onKeyAddUser}></SuperInputText>

                <span className={s.Users__list}>{totalUsers > 0 ? usersList : 'User list is empty'}</span>

            </div>


    )
}

export default Greeting
