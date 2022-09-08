import React, {useRef, useState} from 'react'
import {NavLink} from "react-router-dom";
import h from '../../p1-main/m1-ui/u1-app/App.module.css'
import {FaBars, FaTimes} from 'react-icons/fa'


function Header() {

    const navRef = useRef<HTMLInputElement>(null)

    const showNavbar = () => {
        navRef.current && navRef.current.classList.toggle(h.responsive_nav)
    }


    return (
        <header>
            <nav ref={navRef}>
                <span className={h.logo}>React HomeWorks</span>

                <ul className={h.navLinksContainer}>
                    <li>
                        <NavLink
                            className={h.singleNavLink} to={'/pre-junior'}>
                            Pre-Junior
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={h.singleNavLink} to={'/Junior'}>
                            Junior
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={h.singleNavLink} to={'/Junior-plus'}>
                            Junior+
                        </NavLink>
                    </li>
                </ul>


                <button className={`${h.nav_btn} + ${h.nav_close_btn}`}>
                    <FaTimes onClick={showNavbar}/>
                </button>

            </nav>
            <button className={`${h.nav_btn}`}>
                <FaBars onClick={showNavbar}/>
            </button>
        </header>
    )
}

export default Header
