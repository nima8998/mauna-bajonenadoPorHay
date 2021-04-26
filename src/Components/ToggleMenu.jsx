import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import '../css/ToggleMenu.css'


export default function ToggleMenu() {


    return (

        <div className="dropdown">
            <span className="dropbtn"><Button>CATEGORIAS</Button></span>
                <div className="dropdown-content">
                    <Link to='/category/buzos'>Buzos</Link>
                    <Link to='/category/camperas'>Camperas</Link>
                    <Link to='/category/camisas'>Camisas</Link>
                </div>
        </div>
    )
}
