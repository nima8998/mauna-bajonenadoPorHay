import React from 'react'
import CartWidget from './CartWidget.jsx' 
import ToggleMenu from './ToggleMenu.jsx'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
    return (
        <div className="header">
            <ul className="navbar">
                <Link className='Link' to='/'><li className="navbar__links"><Button>Inicio</Button></li></Link>
                <ToggleMenu />
                <CartWidget/>
            </ul>
        </div>
    )
}