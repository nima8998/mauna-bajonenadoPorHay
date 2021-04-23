import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import AddCart from '@material-ui/icons/AddShoppingCartOutlined'

import '../css/ItemCount.css'

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
        <div className='ItemCount'>
            <p>Stock stocknible: <span className='dispoLocal'>{stockLocal}</span></p>
            <div className='dispo'>
                <Button variant='outlined' color='secondary' size='small' onClick={restar} disabled={disabled}>-</Button>
                <span className='dispoCliente'>{stockCliente}</span>
                <Button variant='outlined' color='primary' size='small' onClick={sumar} disabled={disabled}>+</Button>
            </div>
            <Button variant='outlined' color='primary' size='small'>Agregar al carrito <AddCart color='primary' fontSize='small'/></Button>
        </div>
    )
}
