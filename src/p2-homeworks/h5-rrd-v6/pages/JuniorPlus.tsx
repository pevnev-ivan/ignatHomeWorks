import React from 'react'
import s from './pages.module.css'

function JuniorPlus() {
    return (
        <div className={s.contentContainer}
             style={{height: "100%", display: "flex",
                 alignItems: "center", justifyContent: "center",
                 paddingTop: "35vh"
             }}
        >

            Work in progress <span role={"img"} aria-label={'rocket'}>🚀</span>

        </div>
    )
}

export default JuniorPlus
