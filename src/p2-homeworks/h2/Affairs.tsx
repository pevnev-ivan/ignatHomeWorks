import React from 'react'
import Affair from './Affair'
import {AffairType} from './HW2'
import s from "./Affairs.module.css";

type dataType = {
    _id: number
    name: string
    priority: string
}

type AffairsPropsType = { // need to fix any
    data: Array<dataType>
    setFilter: any
    deleteAffairCallback: (_id: number) => void
    ChangeFilter: any
}

function Affairs(props: AffairsPropsType) {

    const mappedAffairs = props.data.length ? props.data.map((a: AffairType) => {

        return (
        <Affair
            key={a._id}
            _id={a._id}
            affair={a.name}
            priority={a.priority}
            deleteAffairCallback={props.deleteAffairCallback}
        />)
    }) : <div className={s.affair__empty}><span >Task list is empty! &#127879;</span></div>

    const setAll = () => {
         props.ChangeFilter('all')
    }
    const setHigh = () => {
        props.ChangeFilter('high')
    }
    const setMiddle = () => {
        props.ChangeFilter('middle')
    }
    const setLow = () => {
        props.ChangeFilter('low')
    }

    return (
        <div className={s.affairs__containerAll}>
            <div className={s.affairs__container}>

                {mappedAffairs}
                <div className={s.affair__filterBtnsContainer}>
                    <button className={s.affair__filterBtns} onClick={setAll}>All</button>
                    <button className={s.affair__filterBtns} onClick={setHigh}>High</button>
                    <button className={s.affair__filterBtns} onClick={setMiddle}>Middle</button>
                    <button className={s.affair__filterBtns} onClick={setLow}>Low</button>
                </div>
            </div>
        </div>
    )
}

export default Affairs
