import React from 'react'
import Item from '../Components/Item'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const ItemList = ({props}) => {
    return (
        <ItemContainer>
            {
                <Link key={props.id} 
                to={`/item/${props.id}`}>
                    <Item 
                    logo={props.image}
                    title={props.title}             
                    />
                </Link>
            }
        </ItemContainer>
    )

}

export default ItemList

const ItemContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    column-gap: 1rem;
    row-gap: 2rem;
    flex-wrap: wrap;

    a{
        text-decoration: none;
    }
`