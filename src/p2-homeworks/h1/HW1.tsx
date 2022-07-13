import React from 'react'
import Message from "./Message";
import style from './Message.module.css'

const messageData = {
    avatar: 'https://pbs.twimg.com/profile_images/1459434196888399874/ZA_NMTCV_400x400.jpg',
    name: 'Kyojuro Rengoku',
    message: 'Mune o hatte ikiro',
    time: '22:00',
}

const messageData2 = {
    avatar: 'https://i.pinimg.com/originals/57/5c/bc/575cbc223378eff049d151e30839f2af.jpg',
    name: 'Giyu Tomioka',
    message: 'これを簡単 (かんたん) と言 (い) ってしまえる簡単 (かんたん) な頭 (あたま) で羨 (うらや) ましい',
    time: '22:25',
}

function HW1() {
    return (
        <div className={style.container__hw1}>

            <h1> HomeWork 1</h1>
            <Message
                avatar={messageData.avatar}
                name={messageData.name}
                message={messageData.message}
                time={messageData.time}
            />

            <Message
                avatar={messageData2.avatar}
                name={messageData2.name}
                message={messageData2.message}
                time={messageData2.time}
            />


            {/*для личного творчества, могу проверить*/}
           {/* <AlternativeMessage/>*/}

        </div>
    )
}

export default HW1
