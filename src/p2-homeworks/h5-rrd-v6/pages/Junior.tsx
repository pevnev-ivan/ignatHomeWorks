import React from 'react'
import s from './pages.module.css'
import HW6 from "../../h6/HW6";
import HW7 from "../../h7/HW7";

function Junior() {
    return (
        <div className={s.contentContainer}
        style={{height: "100%", display: "flex", flexDirection: 'column',
        alignItems: "center", justifyContent: "center",
            paddingTop: "20px", gap: '20px'
        }}
        >
            <HW6/>
            <HW7/>

        </div>
    )
}

export default Junior

// сделайте по аналогии пустые страницы джун и джун+
// туда будут добавляться следующие дз