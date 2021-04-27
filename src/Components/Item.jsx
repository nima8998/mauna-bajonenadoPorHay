import React from 'react'
import Card from '@material-ui/core/Card';

import '../css/Item.css'

const Item = (articulo) => {
    return (
        <Card>

            <div className='Item'>
                <div className="Item__title">
                    <p>{articulo.title}</p>
                </div>
                <div className='Item__image'>
                    <img src={`/img/products/${articulo.logo}`} alt='productImage'/>
                </div>
            </div>


        </Card>
    )
}

export default Item
