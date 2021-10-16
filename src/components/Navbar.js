import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    const [click, setClick] = useState(false);

    const HandleClick = () => setClick(!click);

    const closeMobileMenu = () => setClick(false);
    
    
    return (
        <div>
            <div className="nav">
                <div className="nav__container">
                    <Link to="/" className="nav__logo">
                        Lagoon
                    </Link>
                    <div className="menu__icon" onClick={HandleClick}>
                        <i className={ click ? "fas fa-times": "fas fa-bars"}></i>
                    </div>
                    <ul className={ click ? "menu active": "menu"}>
                        <li className='nav-item'>
                            <Link to="/" className="nav-link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/about" className="nav-link" onClick={closeMobileMenu}>
                                About
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/projects" className="nav-link" onClick={closeMobileMenu}>
                                Projects
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/prices" className="nav-link" onClick={closeMobileMenu}>
                                Prices
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to="/signUp" className="nav-link-mobile" onClick={closeMobileMenu}>
                                Sign Up
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
