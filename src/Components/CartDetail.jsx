import React from 'react'
import styled from 'styled-components'
import Button from '@material-ui/core/Button'

import {useCartContext} from '../Context/CartContext'

export default function CartDetail(props) {
    let info = props.props;
    let {removeItems} = useCartContext()

    return (
        <Container>
            <ItemImage>
                <img src={info.image} alt={info.title}/>
            </ItemImage>

            <ItemDetail>
                <h1>{info.title}</h1>
                <p>{info.description}</p>
            </ItemDetail>

            <ItemPrice>
                <h1>$ {info.price}</h1>
                <p>Cantidad: {info.qty}</p>
                <span className='talle'>{info.tal}</span>
                <Button 
                    size='small'
                    variant='contained'
                    color='secondary'
                    onClick={()=>removeItems(info.id)}
                >
                    Eliminar
                </Button>
            </ItemPrice>
            
        </Container>
    )
}

const Container = styled.section`
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
    width: 180px;
    height: 200px;
    display: flex;
    align-items: center;

    img{
        width: 100%;
        height: 100%;
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

    .talle{
        color: #f50057;
        font-weight: bold;
    }
`