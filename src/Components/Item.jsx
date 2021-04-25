import React from 'react'
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button'

import '../css/Item.css'

const Item = (props) => {
    return (
        <Card>

            <div className='Item'>
                <div className="Item__title">
                    <p>{props.title}</p>
                </div>
                <div className='Item__image'>
                    <img src={props.logo} alt='productImage'/>
                </div>
                <div className='Item__categoria'>
                    <i>{props.tipo}</i>
                </div>
                <div className='Item__description'>
                    <p>{props.desc}</p>
                </div>
                <div className="Item__ver">
                    <Button variant='outlined' color='secondary'>VER MAS</Button>
                </div>
            </div>


        </Card>
    )
}

export default Item
