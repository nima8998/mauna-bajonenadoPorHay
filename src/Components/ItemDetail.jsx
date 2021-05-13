import React from 'react'
import styled from 'styled-components'

export default function ItemDetail({props}) {
    return (

        <Detail>
            <div className="ItemDetail__image">
                <ItemInformation>
                    <h1>{props.title}</h1>
                    <h2>$ {props.precio}</h2>
                
                    <img src={`/img/products/${props.logo}`} alt="imageProduct"/>

                    <ItemDescription>
                        <p>{props.desc}</p>
                    </ItemDescription>
                </ItemInformation>
            </div>
        </Detail>        
    )
}


const Detail = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    column-gap: 5rem;
    border-radius: 10px;
    padding: 1rem;
    box-shadow: 5px 5px 15px #e4e4e4;
    margin: 3rem;
    background-color: white;
    
    img{
        max-width: 550px;
        border-radius: 5px;
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