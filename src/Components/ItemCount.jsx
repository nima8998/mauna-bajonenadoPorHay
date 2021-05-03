import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddCart from '@material-ui/icons/AddShoppingCartOutlined'
import styled from 'styled-components'

export default function ItemCount({stock}) {
    let disabled = false

    let [stockLocal, setStockLocal] = useState(stock)
    let [stockCliente, setStockCliente] = useState (0)
    
    let sumar = () =>{
        if (stockLocal === 0) {
            disabled = true
        }else{
            setStockLocal(stockLocal -1)
            setStockCliente(stockCliente +1)
        }
    }

    let restar = () =>{
        if (stockCliente === 0) {
            disabled = true
        }else{
            setStockLocal(stockLocal +1)
            setStockCliente(stockCliente -1)
        }
    }
    
    return (
        <Count>
            <p>Stock disponible: <StockLocal>{stockLocal}</StockLocal></p>
            <Stock>
                <Button variant='outlined' color='secondary' size='small' onClick={restar} disabled={disabled}>-</Button>
                <StockCliente>{stockCliente}</StockCliente>
                <Button variant='outlined' color='primary' size='small' onClick={sumar} disabled={disabled}>+</Button>
            </Stock>
            <Button variant='outlined' color='primary' size='small'>Agregar al carrito <AddCart color='primary' fontSize='small'/></Button>
        </Count>
    )
}

const Count = styled.div`
    font-size: 14px;
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