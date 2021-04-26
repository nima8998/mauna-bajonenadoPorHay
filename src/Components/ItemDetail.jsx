import React from 'react'
import ItemCount from './ItemCount'
import Talle from './Talle'
import { useParams } from 'react-router-dom'

import '../css/ItemDetail.css'

export default function ItemDetail({props}) {

    let { paramTitle, paramPrice, paramStock, paramImg, paramDesc } = useParams()
     
    return (

        <div className='ItemDetail'>
            <div className="ItemDetail__image">
                <img src={`/img/products/${paramImg}`} alt="imageProduct"/>

                <div className='ItemDetail__description'>
                    <p>{paramDesc}</p>
                </div>
            </div>

            <div className="ItemDetail__info">
                <h2>{paramTitle}</h2>
                <p>$ {paramPrice}</p>
                <div className='ItemDetail__info-add'>
                    <Talle/>
                    <ItemCount stock={paramStock}/>
                </div>
            </div>
        </div>
        
    )
}
