import React from 'react'
import ItemCount from '../Components/ItemCount'
import Talle from '../Components/Talle'
import styled from 'styled-components'


export default function ItemCountCointainer({props, onAdd, show}) {

    return (
        <PayAdd>
            <Talle/>
            <ItemCount stock={props} onAdd={onAdd} show={show} />
        </PayAdd>
    )
}

const PayAdd = styled.div`
    background-color: #fff;
    padding: 2em;
    border-radius: 10px;
    text-align: center;
    margin: 10rem 0;
    height: 100%;
    box-shadow: 5px 5px 15px #e4e4e4;
`