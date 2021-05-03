import React from 'react'
import CartWidget from './CartWidget.jsx' 
import ToggleMenu from './ToggleMenu.jsx'
import Button from '@material-ui/core/Button'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function Navbar() {
    return (
        <NavBar>
            <Link to='/'><li><Button>Inicio</Button></li></Link>
            <ToggleMenu />
            <CartWidget/>
        </NavBar>
    )
}

const NavBar = styled.ul`
    list-style-type: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    li{
        margin: 0 30px;
    }

    a, &:visited{
        color: #000;
        text-decoration: none;
    }
`