import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import '../css/ToggleMenu.css'


export default function ToggleMenu() {

    return (

        <div className="dropdown">
            <span className="dropbtn"><Button>CATEGORIAS</Button></span>
                <div className="dropdown-content">
                    <Link to='/category/Buzo'>Buzos</Link>
                    <Link to='/category/Campera'>Camperas</Link>
                    <Link to='/category/Camisa'>Camisas</Link>
                </div>
        </div>
    )
}
