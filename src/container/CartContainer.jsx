import React, {useContext} from 'react'
import CartDetail from '../Components/CartDetail'
import CartCheckoutDetail from '../Components/CartCheckoutDetail'
import {CartContext} from '../Context/CartContext'
import styled from 'styled-components'

export default function CartContainer() {

    let {itemCart} = useContext(CartContext)
    console.log(itemCart)

    return (
        <Container>

            <CartList>
                {
                    itemCart.length > 0 ? itemCart.map(item=> (
                        <CartDetail props={item}/>
                    )) :
                    <h1>Anda a comprar, bro</h1>
                }
            </CartList>

            <CartCheckout>
                <CartCheckoutDetail />
            </CartCheckout>

        </Container>
    )
    
}

const Container = styled.article`
    height: calc(100vh - 400px);
    display: flex;
    margin: auto;
    column-gap: 15px;
    max-width: 1600px;
`

const CartList = styled.section`
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
`

const CartCheckout = styled.section`
    width: 550px;
`