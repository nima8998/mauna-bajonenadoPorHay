import React from 'react'
import styled from 'styled-components'

export default function CartDetail(datos) {
    let props = datos.props.props;
    console.log(props)

    return (
        <Container>
            <ItemImage>
                <img src={props.logo} alt=""/>
            </ItemImage>

            <ItemDetail>
                <h1>{props.title}</h1>
                <p>{props.desc}</p>
            </ItemDetail>

            <ItemPrice>
                <h1>$ {props.precio}</h1>
                <p>Cantidad: {props.stock}</p>
                {/* Agregar componente que levante la cantidad y poder subirla o bajarla */}
                {/* Agregar componente para eliminar producto del cart */}
            </ItemPrice>
            
        </Container>
    )
}

const Container = styled.section`
    height: 200px;
    width: 100%;
    border: 1px solid black;
    padding: 5px;
    display: flex;
`

const ItemImage = styled.article`
    height: 100%;
    width: 200px;
    img{
        width: 100%;
        height: 100%;
    }

`

const ItemDetail = styled.article`
    flex: 1;
    padding: 10px;
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