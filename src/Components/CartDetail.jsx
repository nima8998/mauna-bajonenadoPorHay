import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import {useCartContext} from '../Context/CartContext'

export default function CartDetail(props) {
    // maldito nesting
    let info = props.props;
    let {removeItems} = useCartContext()

    return (
        <Container>
            <ItemImage>
                <img src={`./img/products/${info.logo}`} alt={info.title}/>
            </ItemImage>

            <ItemDetail>
                {/* title */}
                <h1>{info.title}</h1>
                {/* descripcion */}
                <p>{info.desc}</p>
            </ItemDetail>

            <ItemPrice>
                {/* precio */}
                <h1>$ {info.precio}</h1>
                {/* cantidad */}
                <p>Cantidad: {info.qty}</p>
                {/* Agregar componente que levante la cantidad y poder subirla o bajarla */}
                <Button 
                    size='small'
                    variant='contained'
                    color='secondary'
                    onClick={()=>removeItems(info.id)}
                >
                    Eliminar
                </Button>
                {/* Agregar componente para eliminar producto del cart */}
            </ItemPrice>
            
        </Container>
    )
}

const Container = styled.section`
    height: 200px;
    width: calc(100% - 2em);
    border-right: 3px solid #3f51b5;
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
    padding: 5px;
    margin-bottom: 2em;
    display: flex;
    box-shadow: 5px 5px 10px #c8c8c8;
`

const ItemImage = styled.article`    
    width: 150px;
    display: flex;
    align-items: center;

    img{
        width: 100%;

    }
`

const ItemDetail = styled.article`
    flex: 1;
    padding: 10px;
    overflow: auto;
    
`

const ItemPrice = styled.article`
    height: 100%;
    width: 250px;
    display: flex;
    align-items: center;
    flex-direction: column;

    h1{
        font-size: 18px;
    }
`