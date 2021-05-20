import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import {useCartContext} from '../Context/CartContext'
import { GoogleLogin } from 'react-google-login';

export default function CartCheckoutDetail() {

    const {clearItems, total, getUnits, itemCart} = useCartContext()

    const responseGoogle = (response) => {
    console.log(response.profileObj);
    }

    return (
        <Container>
                <h2>Lista:</h2>
            <Lista>
                {
                    itemCart.length === 0 ? <p>Carrito vacío.</p>
                    :
                    itemCart.map(x=> (<li>{x.title}</li>))
                }
            </Lista>

            <TotalProductos>
                <h3>Cantidad de productos {getUnits()}</h3>
            </TotalProductos>

            <Total>
                <h1>Importe total</h1>
                <h2>${total()}</h2>
            </Total>

            <FinishBuy>
                <Button
                    variant='contained'
                    color='primary'

                >
                    Pagar
                </Button>
                <Button
                    variant='contained'
                    color='secondary'
                    onClick={() => clearItems()}
                >
                    Vaciar carrito
                </Button>
            </FinishBuy>
            <GoogleLogin
                clientId="1007339188412-lqiv7qp0vbpkgldhkijjf8qgj2di6c9l.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />
        </Container>
    )
}

const Container = styled.section`
    height: 100%;
    border-left: 1px solid black;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const Lista = styled.ul`
    font-size: 14px;
    padding: 0 0 2em 0;
    border-bottom: 1px solid black;

    li{
        list-style-type: none;
        font-weight: 600;
    }
    li::before{
        content: "✔ ";
        color: #f50057;
        width: 2em;
        font-weight: bold;
    }
`

const Total = styled.div`
    text-align: center;
    line-height: 14px;
    h1{
        font-size: 24px;
        color: #f50057;
    }
`
const TotalProductos = styled.div`
    text-align: center;
    line-height: 14px;
`

const FinishBuy = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 1em;
    margin-top: 2em;

    Button{
        width: 100%;
    }
`