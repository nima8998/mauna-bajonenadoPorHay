import React from 'react'
import { Link } from 'react-router-dom'
import HeroIndex from '../img/flat-people/flat0.png'
import Button from '@material-ui/core/Button'

import '../css/Index.css'


export default function Index() {
    

    return (
        <div className='Index'>
            <div className="Index__greetings">
                <h1>¡Bienvenid@!</h1>
                <p>Digitalizá y potenciá tu emprendimiento 😎</p>
                <Link to='/feed' className='Link'><Button variant='contained' color='secondary'>Ingresar</Button></Link>
            </div>
            
            <div className="container">
                <div className="inner">
                    <img src={HeroIndex} alt="logo" id='helper'/>
                </div>
            </div>

        </div>
    )
}
