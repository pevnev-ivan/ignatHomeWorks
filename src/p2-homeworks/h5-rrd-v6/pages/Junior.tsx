import React from 'react'
import s from './pages.module.css'
import HW6 from "../../h6/HW6";

function Junior() {
    return (
        <div className={s.contentContainer}
        style={{height: "100%", display: "flex",
        alignItems: "center", justifyContent: "center",
            paddingTop: "35vh"
        }}
        >
            <HW6/>

        </div>
    )
}

export default Junior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз