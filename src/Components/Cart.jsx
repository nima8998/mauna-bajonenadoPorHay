import React from 'react'
import styled from 'styled-components'
import CartDetail from './CartDetail'
import CartCheckoutDetail from './CartCheckoutDetail'

export default function Cart(datos) {

    return (
        <Container>
            <CartList>
                <CartDetail props={datos} />
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
`

const CartCheckout = styled.section`
    width: 550px;
`