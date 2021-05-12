import React from 'react'
import styled from 'styled-components'

export default function CartDetail(props) {
    // maldito nesting
    let info = props.props;

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
                {/* Agregar componente para eliminar producto del cart */}
            </ItemPrice>
            
        </Container>
    )
}

const Container = styled.section`
    height: 200px;
    width: calc(100% - 2em);
    border: 1px solid black;
    padding: 5px;
    margin: 5px;
    margin-right: 5px;
    display: flex;
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