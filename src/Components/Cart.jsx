import React from 'react'
import styled from 'styled-components'
import CartDetail from './CartDetail'
import CartCheckoutDetail from './CartCheckoutDetail'

export default function Cart() {

    return (
        <Container>
            <CartList>
                <CartDetail />
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
    column-gap: 1em;
    max-width: 1200px;
`

const CartList = styled.section`
    width: 100%;
`

const CartCheckout = styled.section`
    width: 550px;
`