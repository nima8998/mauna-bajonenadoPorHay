import React from 'react'
import styled from 'styled-components'
import {device} from '../css/MediaQueries'
import CartWidget from './CartWidget.jsx' 
import Button from '@material-ui/core/Button'
import Login from './Login'
import User from './User.jsx'
import ListCategorias from './ListCategorias'
import { Link } from 'react-router-dom'
import {useUserContext} from '../Context/UserContext'

export default function Navbar() {
    const {userLogged} = useUserContext()

    return (
        <div>
            <NavBar>
                <Link to='/' replace><li><Button>Inicio</Button></li></Link>
                <Link to='/products'><li><Button>Productos</Button></li></Link>
                <CartWidget/>
                {
                    userLogged === undefined ? <Login/> : <User/>
                }
            </NavBar>
            <ListCategorias/>
        </div>
    )
}

const NavBar = styled.div`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 45%;
    margin: 1em auto;

    a, &:visited{
        color: #000;
        text-decoration: none;
    }

    @media ${device.mobile}{
        flex-direction: column;
        justify-content: center;
        margin: 0 auto 5em;
    }
`