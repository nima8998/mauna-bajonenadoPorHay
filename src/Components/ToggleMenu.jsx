import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'

export default function ToggleMenu() {

    return (
        <DropDown>
            <span className="dropbtn"><Button>CATEGORIAS</Button></span>
                <DropDownContent className='DropDownContent'>
                    <Link to='/category/buzos'> Buzos</Link>
                    <Link to='/category/camperas'>Camperas</Link>
                    <Link to='/category/camisas'>Camisas</Link>
                </DropDownContent>
        </DropDown>
    )
}

const DropDown = styled.div`
    position: relative;
    display: inline-block;

    &:hover .DropDownContent{
        display: block;
    }

    a{
        &:hover{
            background: #ececec;
        }

        &:visited{
            color: #000;
            text-decoration: none;
        }
    } 
`

const DropDownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;

    a{
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }
`