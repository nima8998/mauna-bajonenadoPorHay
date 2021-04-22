import React, { useState } from 'react'
import Button from '@material-ui/core/Button'

import '../css/ItemCount.css'

export default function ItemCount({dispo}) {
    let disabled = false

    let [dispoLocal, setDispoLocal] = useState(dispo)
    let [dispoCliente, setDispoCliente] = useState (0)
    
    let sumar = () =>{
        if (dispoLocal === 0) {
            disabled = true
        }else{
            setDispoLocal(dispoLocal -1)
            setDispoCliente(dispoCliente +1)
        }
    }

    let restar = () =>{
        if (dispoCliente === 0) {
            disabled = true
        }else{
            setDispoLocal(dispoLocal +1)
            setDispoCliente(dispoCliente -1)
        }
    }
    
    return (
        <div className='ItemCount'>
            <p>Disponibilidad para reserva: <span className='dispoLocal'>{dispoLocal}</span></p>
            <div className='dispo'>
                <Button variant='outlined' color='secondary' size='small' onClick={restar} disabled={disabled}>-</Button>
                <span className='dispoCliente'>{dispoCliente}</span>
                <Button variant='outlined' color='primary' size='small' onClick={sumar} disabled={disabled}>+</Button>
            </div>
            <Button variant='contained' color='primary' size='small'>Reservar</Button>
        </div>
    )
}
