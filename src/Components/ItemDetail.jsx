import React from 'react'
import ItemCount from './ItemCount'
import Talle from './Talle'

import '../css/ItemDetail.css'

export default function ItemDetail({props}) {
    return (

        <div className='ItemDetail'>
            <div className="ItemDetail__image">
                <img src={props.logo} alt="imageProduct"/>

                <div className='ItemDetail__description'>
                    <ul>
                        <li>{props.description.info}</li>
                        <li>{props.description.terminacion}</li>
                        <li>Material: {props.description.material}</li>
                        <li>Color: {props.description.color}</li>
                    </ul>
                </div>
            </div>

            <div className="ItemDetail__info">
                <h2>{props.title}</h2>
                <p>$ {props.precio}</p>
                <div className='ItemDetail__info-add'>
                    <Talle/>
                    <ItemCount stock={props.stock}/>
                </div>
            </div>
        </div>
        
    )
}
