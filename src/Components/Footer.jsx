import React from 'react'
import '../css/Footer.css'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <div className="Footer">
            <div className='Container__Footer'>
                <ul className="Footer__Map">
                    <p></p>
                    <li><Link to='/'>Inicio</Link></li>
                    <li><Link to='/category/Buzo'>Buzos</Link></li>
                    <li><Link to='/category/Campera'>Camperas</Link></li>
                    <li><Link to='/category/Camisa'>Camisas</Link></li>
                </ul>
                <ul className="Footer__Redes">
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Instagram</li>
                    <li>Tik Tok</li>
                </ul>
                <ul className="Footer__Contact">
                    <li>Contacto</li>
                    <li>Nosotros</li>
                    <li>Donde estamos</li>
                </ul>
            </div>
        </div>
    )
}
