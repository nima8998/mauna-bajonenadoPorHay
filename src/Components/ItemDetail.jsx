import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ItemCount from './ItemCount'
import Talle from './Talle'

export default function ItemDetail({props}) {
    return (
        <Card>
            <CardHeader title={props.title} />            
            <CardMedia image={props.logo}/>
            <CardContent component='b'>
                {props.categoria}
            </CardContent>
            <CardContent component='p'>
                {props.description}
            </CardContent>

            <CardContent>
                <Talle/>
            </CardContent>

            <CardContent component='h2'>
                $ {props.precio}
            </CardContent>

            <ItemCount stock={props.stock}/>

        </Card>
    )
}
