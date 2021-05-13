import React, {useContext} from 'react'
import CartDetail from '../Components/CartDetail'
import CartCheckoutDetail from '../Components/CartCheckoutDetail'
import {CartContext} from '../Context/CartContext'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function CartContainer() {

    let {itemCart} = useContext(CartContext)

    return (
        <Container>

            <CartList>
                {
                    itemCart.length > 0 ? itemCart.map(item=> (
                        <CartDetail props={item}/>
                    )) :

                        <h1> Carrito vacía ¡Revisá nuestra <Link to='/'>tienda</Link>!</h1>
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
    text-align: center;
    a{
        color: #f50057;
        text-decoration: none;
    }
`

const CartCheckout = styled.section`
    width: 550px;
`