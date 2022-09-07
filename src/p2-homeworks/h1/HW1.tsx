import React from 'react'
import Message from "./Message";
import style from './Message.module.css'

const messageData = {
    avatar: 'https://media-exp1.licdn.com/dms/image/C4D03AQHatQc4YtAArw/profile-displayphoto-shrink_200_200/0/1636134399713?e=2147483647&v=beta&t=PI4qs9XPK0_UpIxqIF-8l70V91PwArDwF8Yr__WmCvo',
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
