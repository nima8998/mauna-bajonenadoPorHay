import React from 'react'
import CartWidget from './CartWidget.jsx' 
import ToggleMenu from './ToggleMenu.jsx'
import Button from '@material-ui/core/Button'
import Login from './Login'
import User from './User.jsx'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import {useUserContext} from '../Context/UserContext'

export default function Navbar() {
    const {userLogged} = useUserContext()

    return (
        <NavBar>
            <Link to='/'><li><Button>Inicio</Button></li></Link>
            <ToggleMenu />
            <CartWidget/>
            {
                userLogged === undefined ? <Login/> : <User/>
            }
        </NavBar>
    )
}

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    max-width: 45vw;
    margin: 2em auto 4em;

    li{
        margin: 0 30px;
    }

    a, &:visited{
        color: #000;
        text-decoration: none;
    }
`