import React from 'react'
import s from './Affairs.module.css'

type AffairPropsType = {
    _id: number
    affair: string
    priority: string
    deleteAffairCallback: any // need to fix any
}

function Affair(props: AffairPropsType) {
    const deleteCallback = () => {
        props.deleteAffairCallback(props._id)
    }// need to fix

    return (
        < >
            <ul>
                <li className={s.affair__element}>
                    <span className={s.affair_text}>{props.affair}</span>
                    <button className={s.affair__btn} onClick={deleteCallback}>X</button>
                </li>
            </ul>
        </>
    )
}

export default Affair
