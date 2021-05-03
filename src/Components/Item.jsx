import React from 'react'
import Card from '@material-ui/core/Card';
import styled from 'styled-components'

const Item = (articulo) => {

    let styleCard = {
        width: '350px',
        padding: '10px'
    }

    return (
        <Card style={styleCard}>

            <ItemCard className='Item'>
                <ItemTitle>
                    {articulo.title}
                </ItemTitle>
                <Item__image>
                    <img src={`/img/products/${articulo.logo}`} alt='productImage'/>
                </Item__image>
            </ItemCard>


        </Card>
    )
}

export default Item 

const ItemCard = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
`

const ItemTitle = styled.div`
    font-size: 20px;
    margin: 15px 0;
    font-weight: 600;
`

const Item__image = styled.div`
    img{
        width: 350px;
        max-width: 350px;
        border-radius: 5px;
    }
`

