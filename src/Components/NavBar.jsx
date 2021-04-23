import React from 'react'
import CartWidget from './CartWidget.jsx' 
import '../css/Navbar.css'

export default function Navbar() {
    return (
        <div className="header">
            <ul className="navbar">
                <li className="navbar__links">Inicio </li>
                <li className="navbar__links">Categorias </li>
                <li className="navbar__links">Ofertas</li>
                <CartWidget/>
            </ul>
        </div>
    )
}