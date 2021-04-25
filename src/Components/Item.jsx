import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ItemCount from './ItemCount'
import Talle from './Talle'

import '../css/Item.css'

const Item = (props, tipo, desc) => {
    return (
        <Card>
            <CardHeader title={props.title}/>

            <CardMedia image={props.logo}/>

            <CardContent component='b'>
                {tipo=props.tipo}
            </CardContent>
            
            <CardContent component='p'>
                    {desc=props.desc}
            </CardContent>

            <CardContent>
                <Talle />
            </CardContent>

                <ItemCount stock={props.stock} />

        </Card>
    )
}

export default Item
