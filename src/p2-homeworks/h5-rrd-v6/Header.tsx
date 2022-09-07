import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
import h from '../../p1-main/m1-ui/u1-app/App.module.css'

function Header() {

    const [isActive, setIsActive] = useState(false);
    const clickHandler = () => {
        setIsActive(!isActive)

    }

    return (
        <div>
            <nav>
                <span className={h.logo}>React HomeWorks</span>

                <ul className={!isActive ? h.navLinks : h.navActive} >
                    <li><NavLink
                        style={({isActive}) => ( isActive ?{
                            border: '2px solid whitesmoke',
                            padding: '3px 5px',
                            borderRadius: '20px'
                        }: {})}
                        className={({isActive}) => isActive ? h.actLink : h.defLink} to={'/pre-junior'}>
                        Pre-Junior
                    </NavLink></li>
                    <li><NavLink
                        style={({isActive}) => ( isActive ?{
                            border: '2px solid whitesmoke',
                            padding: '3px 5px',
                            borderRadius: '20px'
                        }: {})}
                        className={({isActive}) => isActive ? h.actLink : h.defLink} to={'/Junior'}>
                        Junior
                    </NavLink></li>
                    <li><NavLink
                        style={({isActive}) => ( isActive ?{
                            border: '2px solid whitesmoke',
                            padding: '3px 5px',
                            borderRadius: '20px'
                        }: {})}
                        className={({isActive}) => isActive ? h.actLink : h.defLink} to={'/Junior-plus'}>
                        Junior+
                    </NavLink></li>
                </ul>

                <div className={h.burger} onClick={clickHandler}>
                    <div className={h.line1}></div>
                    <div className={h.line2}></div>
                    <div className={h.line3}></div>
                </div>
            </nav>
        </div>
    )
}

export default Header
