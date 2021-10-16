import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <div>
            <div className="nav">
                <div className="nav__container">
                    <Link to="/" className="nav__logo">
                        Lagoon
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
