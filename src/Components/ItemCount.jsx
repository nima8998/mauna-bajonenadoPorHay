import React from 'react'
import Button from '@material-ui/core/Button'
import AddCart from '@material-ui/icons/AddShoppingCartOutlined'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

export default function ItemCount({sumar,
restar,
addToCart,
show,
stockLocal,
stockCliente,
disabled,
disabledBuy}) {


return (
        <Count>
            <span>Stock disponible: <StockLocal>{stockLocal}</StockLocal></span>

            <Stock>
                <Button
                    variant='outlined'
                    color='secondary'
                    size='small'
                    onClick={restar}
                    disabled={disabled}
                >
                    -
                </Button>

                <StockCliente>{stockCliente}</StockCliente>

                <Button
                    variant='outlined'
                    color='primary'
                    size='small'
                    onClick={sumar}
                    disabled={disabled}
                >
                    +
                </Button>

            </Stock>
            {
                show === false ? 
                <Button 
                    onClick={( () => addToCart(stockCliente) )}
                    variant='outlined'
                    color='primary'
                    disabled={disabledBuy}
                >
                        Agregar al carrito
                    <AddCart color='primary' fontSize='small'/>
                </Button>
                :
                <Link to='/checkout'>
                    <Button
                        variant='outlined'
                        color='secondary' 
                    >
                        Terminar compra ❤
                    </Button>
                </Link>
            }
        </Count>
    )
}

const Count = styled.div`
    font-size: 14px;
    a{
        text-decoration: none;
    }
`

const Stock = styled.div`
    margin: 1.5rem 0;
`
const StockLocal = styled.div`
    font-weight: 600;
`

const StockCliente = styled.span`
    margin: 0 1.5rem;
    font-weight: 600;
`
