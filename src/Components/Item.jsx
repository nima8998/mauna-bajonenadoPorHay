import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'

import '../css/Item.css'

const Item = (props) => {
    return (
        <Card>

            <div className='Item'>
                <div className="Item__title">
                    <p>{props.tipo}</p>
                </div>
                <div className='Item__image'>
                    <img src={`/img/products/${props.logo}`} alt='productImage'/>
                </div>
                <div className="Item__ver">
                    <Button variant='outlined' color='secondary'>VER MAS</Button>
                </div>
            </div>


        </Card>
    )
}

export default Item
