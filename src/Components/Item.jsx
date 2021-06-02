import React from 'react'
import Card from '@material-ui/core/Card';
import styled from 'styled-components'

const Item = (articulo) => {

    return (
        <Card>

            <ItemCard>
                <ItemTitle>
                    {articulo.title}
                </ItemTitle>
                <ItemImage>
                    <img src={articulo.logo} alt={articulo.title}/>
                </ItemImage>
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

const ItemImage = styled.div`
    img{
        padding: .5em;
        width: 350px;
        max-width: 350px;
        border-radius: 5px;
    }
`

