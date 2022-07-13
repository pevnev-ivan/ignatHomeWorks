import React from 'react'
import style from './Message.module.css'

type MessageType = {
    avatar: string;
    name: string;
    message: string;
    time: string;

}

function Message(props: MessageType) {
    return (<>
            <div className={style.wrap}>
            <div className={style.container}>
                <div className={style.avatarContainer}>
                    <img className={style.avatar} src={props.avatar} alt="Avatar pic"/>
                </div>

                <div className={style.message}>
                    <p className={style.name}>{props.name}</p>
                    <p className={style.text}>{props.message}</p>
                    <span className={style.time}>{props.time}</span>
                </div>
            </div>
            </div>


        </>
    )
}

export default Message
