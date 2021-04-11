import React from 'react'
import '../css/Navbar.css'
import CartWidget from './CartWidget.jsx' 

export default function Navbar() {
    return (
        <div className="header">
            <ul className="navbar">
                <CartWidget/>
                <li className="navbar__links">Inicio </li>
                <li className="navbar__links">Buscar: por zona</li>
                <li className="navbar__links">por Categorias</li>
            </ul>
        </div>
    )
}