import React from 'react'
import styled from 'styled-components'

export default function ItemDetail({props}) {
    return (

        <Detail className="ItemDetail__image col-sm-12 col-md-auto">
            <ItemInformation>
                <h1>{props.title}</h1>
                <h2>$ {props.price}</h2>
            
                <img src={props.image} alt="imageProduct"/>

                <ItemDescription>
                    <p>{props.description}</p>
                </ItemDescription>
            </ItemInformation>
        </Detail>
    )
}


const Detail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: 5rem;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 5px 5px 15px #cfcfcf;
    background-color: white;
    margin: auto;
    
    img{
        max-width: 75%;
        width: 100%;
        object-fit: cover;
    }
`
const ItemDescription = styled.div`
    padding: 1rem;
    margin-top: 2rem;
`
const ItemInformation = styled.div`
    align-self: flex-start;
    text-align: center;
    
    h2 {
        text-align: center;
        font-size: 42px;
        color: #6064BF;
        font-weight: 600;
    }
`