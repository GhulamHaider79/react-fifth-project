import React from 'react'
import logo from '../assets/logo.png'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="">
                <div className="mainNavbar">
                    <div className="topNav">
                        <ul>
                            <li>
                                <NavLink
                                    to="#"
                                    className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"}`}>
                                    SEARCH MORE IN APP
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="#"
                                    className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} `}>
                                    SELL ON CARTCRASE
                                </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="#"
                                    className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} `}>
                                    LOGIN
                                </NavLink>

                            </li>
                            <li>
                                <NavLink
                                    to="#"
                                    className={({ isActive }) => `${isActive ? "text-orange-700" : "text-gray-700"} `}>
                                    SIGN UP
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <div className="bottomNav">
                        <div className="log">
                            <img src={logo} alt="website logo" />
                        </div>
                        <div className="nav-2">

                            <div className="searchBox">
                               <div className="searchInp">
                               <input type="search" placeholder='Search In CartCrase' />
                               <button>Search</button>
                               </div>
                                
                            </div>
                            
                        </div>



                    </div>
                </div>
            </nav>
        </header>
    )
}

export default Header
