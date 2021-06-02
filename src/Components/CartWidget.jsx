import React from 'react'
import Cart from '@material-ui/icons/ShoppingCartOutlined'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { useCartContext } from '../Context/CartContext'
import { device } from '../css/MediaQueries'

export default function CartWidget() {

    const { itemCart, getUnits } = useCartContext()


    return (
        <CartIcon>
            <Link to='/checkout'>
                <Cart color="primary"/>
                <CartCount style={{display: `${itemCart >= 0  ? 'none' : 'inline'}`}}>
                    {
                        getUnits()
                    }
                </CartCount>
            </Link>
        </CartIcon>
    )
}

const CartIcon = styled.div`
    margin-left: 35px;
    
    @media ${device.mobile}{
        margin: 0;
    }
`

const CartCount = styled.span`
    position: relative;
    right: 10px;
    top: 5px;
    text-align: center;
    background: #f50057;
    font-weight: 600;
    color: #fff;
    font-size: 12px;
    padding: .2em .5em;
    border-radius: 50%;
`