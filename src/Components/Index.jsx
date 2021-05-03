import React from 'react'
import { Link } from 'react-router-dom'
import HeroIndex from '../img/flat-people/flat0.png'
import Button from '@material-ui/core/Button'

export default function Index() {

    return (
        <IndexContainer>
            <Index__greetings>
                <h1>¡Bienvenid@!</h1>
                <p>Digitalizá y potenciá tu emprendimiento 😎</p>
                <Link to='/feed' className='Link'><Button variant='contained' color='secondary'>ver demo</Button></Link>
            </Index__greetings>
            
            <div className="container">
                <div className="inner">
                    <img src={HeroIndex} alt="logo" id='helper'/>
                </div>
            </div>

        </IndexContainer>
    )
}

const IndexContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5rem;
    height: 100vh;

    h1{
        font-size: 52px;
    }

    p{
        font-weight: 600;
        font-size: 18px;
    }

    .Link{
        text-decoration: none;
    }

    img{
        max-width: 650px;
    }

`

const Index__greetings = styled.div`
    text-align: center;
    max-width: 450px;
`

