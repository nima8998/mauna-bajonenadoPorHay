import React from 'react'
import CartWidget from './CartWidget.jsx' 
import { Link } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
    return (
        <div className="header">
            <ul className="navbar">
                <Link className='Link' to='/feed'><li className="navbar__links">Inicio </li></Link>
                <li className="navbar__links">Categorias </li>
                <li className="navbar__links">Ofertas</li>
                <CartWidget/>
            </ul>
        </div>
    )
}