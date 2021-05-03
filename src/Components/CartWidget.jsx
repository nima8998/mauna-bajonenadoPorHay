import React from 'react'
import Cart from '@material-ui/icons/ShoppingCartOutlined'
import styled from 'styled-components'

export default function CartWidget() {

    return (
        <CartIcon>
            <Cart color="primary"/>
        </CartIcon>
    )
}

const CartIcon = styled.div`
    margin-left: 35px
`