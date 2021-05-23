import React from 'react'
import CartDetail from '../Components/CartDetail'
import CartCheckoutDetail from '../Components/CartCheckoutDetail'
import Login from '../Components/Login'
import {useCartContext} from '../Context/CartContext'
import {useUserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

export default function CartContainer() {

    const {itemCart} = useCartContext()
    const {userLogged} = useUserContext()     

    return (
        <Container>

            <CartList>
                {
                    itemCart.length > 0 ? itemCart.map(item=> (
                        <CartDetail key={item.id} props={item}/>
                    )) :

                        <h1> Carrito vacío ¡Revisá nuestra <Link to='/'>tienda</Link>!</h1>
                }
            </CartList>

            <CartCheckout>
                {
                    userLogged === undefined ? <Login message='Logueate para finalizar tu compra'/> : <CartCheckoutDetail/>
                }
            </CartCheckout>

        </Container>
    )
    
}

const Container = styled.article`
    height: 100%;
    display: flex;
    margin: auto;
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
    display: flex;
    justify-content: center;
    align-items: center;
`