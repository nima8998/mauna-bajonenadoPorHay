import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

export default function ListCategorias() {

        return (
        <Container>
            <ul>
                <Link to='/category/buzos'><li>Buzos</li></Link>
                <Link to='/category/camperas'><li>Camperas</li></Link>
                <Link to='/category/camisas'><li>Camisas</li></Link>
            </ul>
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 50px;
    margin: 1em auto;
    
    ul{
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0;
        list-style: none;

        li{
            margin: 0 1em;
        }

        a{
            color: #000;
            text-decoration: none;

            &:visited{
                color: #000;
            }
        }
    }
`