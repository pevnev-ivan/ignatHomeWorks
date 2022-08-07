import React from 'react'
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: any // need to fix any
    addUser: any // need to fix any
    error: any // need to fix any
    totalUsers: number
    users: any
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers, users} // деструктуризация пропсов
) => {
    const inputClass = s.error // need to fix with (?:)
    const usersList = users.map((objFromUser: { name: React.ReactNode }, index: any) => {
        return (
            <div>
                {objFromUser.name}
            </div>
        )
    })

    console.log('azazam', users)
    return (<div>
            <div className={s.Greeting__Container}>
                <input value={name} onChange={setNameCallback} className={s.Greeting__inpt}/>
                <span>{error}</span>
                <button className={s.Greeting__btn} onClick={addUser}>add</button>
                <span> Users Count: {totalUsers}</span>
            </div>
            <div className={s.Users__list}>
                <span >{totalUsers > 0 ? usersList : 'User list is empty'}</span>
            </div>
        </div>

    )
}

export default Greeting
