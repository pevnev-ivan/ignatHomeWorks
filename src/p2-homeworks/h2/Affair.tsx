import React from 'react'
import s from './Affairs.module.css'
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

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

    const priorityRender = () => {
        switch (props.priority) {
            case 'high':
                return (<span className={s.affair__element_priority} style={{opacity: '1', color: '#d15a84' }}> ● </span>)
            case 'middle':
                return (<span className={s.affair__element_priority} style={{opacity: '0.5', color: '#b358aa' }}> ● </span>)
            default:
                return (<span className={s.affair__element_priority}style={{opacity: '0.2', color: '#a781e1'}}> ● </span>)
        }
    }

    return (
        < >
            <ul>
                <li className={s.affair__element}>
                    <span className={s.affair_text}>{props.affair}</span>
                    {priorityRender()}
                    {/*<button className={s.affair__btn} onClick={deleteCallback}>X</button>*/}
                    <SuperButton  className={s.affair__btn} onClick={deleteCallback}>X</SuperButton>
                </li>
            </ul>
        </>
    )
}

export default Affair
