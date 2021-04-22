import React from 'react'
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions'
import Button from '@material-ui/core/Button'
import ItemCount from './ItemCount'
import '../css/Item.css'
import logo from '../img/lugares/logo.png'

const Item = (props, tipo, direccion, exp) => {
    console.log(props)
    return (
        <Card>
            <CardActionArea>
                <CardHeader title={props.title}/>
                <CardMedia>
                    <img src={logo} alt='logo'/>
                </CardMedia>
                <CardContent component='b'>
                    {tipo=props.tipo}
                </CardContent>
                <CardContent component='p'>
                        Como se sintió Rama: {exp=props.exp}
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size='small' color='primary'>
                    {direccion=props.direccion}
                </Button>
            </CardActions>
                <ItemCount dispo={props.dispo} />
        </Card>
    )
}

export default Item
