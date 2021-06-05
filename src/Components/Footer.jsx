import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function Footer() {
    return (
        <Container>
            <ul>
                <li><Link to='/' replace>Inicio</Link></li>
                <li><Link to='/category/buzos' replace>Buzos</Link></li>
                <li><Link to='/category/camperas' replace>Camperas</Link></li>
                <li><Link to='/category/camisas' replace>Camisas</Link></li>
            </ul>
            <ul>
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>Tik Tok</li>
            </ul>
            <ul>
                <li>Contacto</li>
                <li>Nosotros</li>
                <li>Donde estamos</li>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-wrap: wrap;
    max-width: 1300px;
    margin: auto;
    margin-bottom: 2rem;
    margin-top: 5rem;
    width: 100%;
    position: sticky;
    top: 100%;

    ul{
        list-style-type: none;
        padding: 0;
        font-size: 14px;
        
        li{
            margin: 16px 0;
        }
    }

    a{
        text-decoration: none;
        color: #000;
        &:visited{
            color: #000;
        }
    }
`