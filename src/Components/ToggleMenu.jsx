import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import '../css/ToggleMenu.css'


export default function ToggleMenu() {

    return (

        <div className="dropdown">
            <span className="dropbtn"><Button>CATEGORIAS</Button></span>
                <div className="dropdown-content">
                    <Link to='/Buzo'>Buzos</Link>
                    <Link to='/Campera'>Camperas</Link>
                    <Link to='/Camisa'>Camisas</Link>
                </div>
        </div>
    )
}
