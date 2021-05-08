import React from 'react'
import Cart from '@material-ui/icons/ShoppingCartOutlined'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function CartWidget() {

    return (
        <CartIcon>
            <Link to='/checkout'>
                <Cart color="primary"/>
            </Link>
        </CartIcon>
    )
}

const CartIcon = styled.div`
    margin-left: 35px
`