import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes, FaTypo3 } from 'react-icons/fa'
import { Button } from '../Button'
import './Navbar.css'

function Navbar() {
    const [click, setClick] = useState(false)
    const closeMobileMenu = () => {
        setClick(false)
    }

    useEffect(() => {
        console.log('hook working');
    }, [])
    return (
        <>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to="/" className="navbar__logo">
                        CMK-TRVL <FaTypo3 />
                    </Link>
                    <div onClick={() => setClick(!click)} className="navbar__menuIcon">
                        {click ? (<FaTimes />) : (<FaBars />)}
                    </div>
                    <ul className={`navbar__menu ${click ? 'navbar__menu--active' : ''}`}>
                        <li className="navbar__item">
                            <Link to='/' className="navbar__link" onClick={closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='/services' className="navbar__link" onClick={closeMobileMenu}>
                                Services
                            </Link>
                        </li>
                        <li className="navbar__item">
                            <Link to='/products' className="navbar__link" onClick={closeMobileMenu}>
                                Products
                            </Link>
                        </li>
                        <li className="navbar__button">
                            <Button buttonStyle="btn--outline">Sign Up</Button>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
