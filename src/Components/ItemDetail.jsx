import React from 'react'
import ItemCount from './ItemCount'
import Talle from './Talle'

import '../css/ItemDetail.css'

export default function ItemDetail({props}) {

    return (

        <div className='ItemDetail'>
            <div className="ItemDetail__image">
                <img src={`/img/products/${props.logo}`} alt="imageProduct"/>

                <div className='ItemDetail__description'>
                    <p>{props.desc}</p>
                </div>
            </div>

            <div className="ItemDetail__info">
                <h1>{props.title}</h1>
                <p>$ {props.precio}</p>
                <div className='ItemDetail__info-add'>
                    <Talle/>
                    <ItemCount stock={props.stock}/>
                </div>
            </div>
        </div>
        
    )
}
