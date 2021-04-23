import React from 'react'
import HeroIndex from '../img/flat-people/flat0.png'
import Button from '@material-ui/core/Button'

import '../css/Index.css'


export default function Index() {
    

    return (
        <div className='Index'>
            <div className="Index__greetings">
                <h1>¡Bienvenide!</h1>
                <p>Digitalizá y potenciá tu emprendimiento 😎</p>
                <Button variant='contained' color='secondary'>Ingresar</Button>
            </div>
            
            <div className="container">
                <div className="inner">
                    <img src={HeroIndex} alt="logo" id='helper'/>
                </div>
            </div>

        </div>
    )
}
