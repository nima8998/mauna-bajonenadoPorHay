import React from 'react'
import ItemCount from '../Components/ItemCount'
import Talle from '../Components/Talle'
import styled from 'styled-components'


export default function ItemCountCointainer({props, onAdd}) {

    return (
        <PayAdd>
            <Talle/>
            <ItemCount stock={props.stock} onAdd={onAdd} />
        </PayAdd>
    )
}

const PayAdd = styled.div`
    text-align: center;
    margin: 10rem 0;
`