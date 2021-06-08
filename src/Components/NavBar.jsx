import React from 'react'
import styled from 'styled-components'
import Brand from '../img/reactoBrand.png'
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
                <NavBarLinks>
                    <Link to='/' replace><img src={Brand} alt="brand logo" /></Link>
                    <Link to='/' replace><li><Button>Inicio</Button></li></Link>
                    <Link to='/products'><li><Button>Productos</Button></li></Link>
                </NavBarLinks>
                <NavBarUser>
                    <CartWidget/>
                    {
                        userLogged === undefined ? <Login/> : <User/>
                    }
                </NavBarUser>
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
    max-width: 100%;
    margin: 1em auto;
    padding-bottom: .5em;
    border-bottom: 1px solid #000;

    a, &:visited{
        color: #000;
        text-decoration: none;
    }

    @media ${device.mobile}{
        flex-direction: column;
        justify-content: center;
        margin: 0 auto 2em;
        row-gap: 3em;
    }

    @media ${device.tablet}{
        flex-direction: column;
        row-gap: 3em;
        
        img{
            width: 5em;
        }
    }
`

const NavBarLinks = styled.div`
    display: flex;
    align-items: center;
    column-gap: 2em;

    img{
        object-fit: cover;
        width: 8em;
    }
`
const NavBarUser = styled.div`
    display: flex;
    align-items: center;

`