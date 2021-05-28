import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'
import {useCartContext} from '../Context/CartContext'
import {Link} from 'react-router-dom'

export default function CartCheckoutDetail({handlerBuy, newBuy, show}) {

    const {clearItems, total, getUnits, itemCart} = useCartContext()

    return (
        <Container>
                <h2>Lista:</h2>
            <Lista>
                {
                    itemCart.length === 0 ? <p>Carrito vacío.</p>
                    :
                    itemCart.map(x=> (<li key={x.id}>{x.title}</li>))
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

                {
                    newBuy <= 0
                        ? 
                    <div>
                        <Button
                            variant='contained'
                            color='primary'
                            onClick={()=>handlerBuy()}
                            disabled={show}
                        >
                            Terminar compra
                        </Button>
                        <Button
                            variant='contained'
                            color='secondary'
                            onClick={() => clearItems()}
                            disabled={show}
                        >
                            Vaciar carrito
                        </Button>
                    </div>
                        :
                    <div className="idCompra">
                        <b>¡Compra efectuada! El ID de tu compra es:</b>
                        <p>{newBuy.id}</p>
                        
                        <Link
                            to='/profile'
                        >
                            <Button
                                variant='contained'
                                color='secondary'
                            >
                                    Ver tus compras
                            </Button>
                        </Link>
                    </div>
                }
                
            </FinishBuy>
            
        </Container>
    )
}

const Container = styled.section`
    height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
`

const Lista = styled.ul`
    font-size: 14px;
    padding: 0 0 2em 0;

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
        margin: .5em 0;
    }

    .idCompra{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        a{
            color: #fff;
            text-decoration: none;
        }
    }
`