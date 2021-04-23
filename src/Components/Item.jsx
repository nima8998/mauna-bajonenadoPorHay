import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import ItemCount from './ItemCount'
import Talle from './Talle'
import logo from '../img/productoLogo.jpeg'
import '../css/Item.css'

const Item = (props, tipo, desc) => {
    console.log(props)
    return (
        <Card>
            <CardHeader title={props.title}/>

            <CardMedia>
                <img src={logo} alt='logo'/>
            </CardMedia>

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
