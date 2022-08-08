import React, {ChangeEvent, KeyboardEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: Array<UserType>
    addUserCallback: (name: string) => void
}

// более простой и понятный вариант
// function GreetingContainer(props: GreetingPropsType) {...}


// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => { // деструктуризация пропсов
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<boolean>(true)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(true)
        setName(e.currentTarget.value)


    }
    const addUser = () => {
        if (name.trim() == '') {
            setError(false)
            alert('Name should contain characters')
            return
        }
        addUserCallback(name)
        alert('Hello, ' + name + '!')
        setName('')
    }

    const onKeyAddUser = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addUser()
        }
    }

    const totalUsers = users.length

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
            users={users}
            onKeyAddUser={onKeyAddUser}
        />
    )
}

export default GreetingContainer
