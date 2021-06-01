import React from 'react'
import styled from 'styled-components'

export default function OrderListDetail({props}) {
    return (
        <Container>
            <h3>
                {
                    `Compra id: ${props.id}`
                }
            </h3>
            <ContainerDetail>
                <ContainerImages>
                    {
                        props.items.map(x=>{
                            return(
                                <div key={x.id}>
                                    <p>Cant.: {x.qty}</p>
                                    <img src={x.image} alt={x.title} />
                                </div>
                            )
                        })
                    }
                </ContainerImages>
                <ContainerPrice>
                    <p className='total'>Total</p>
                    <b>${props.total}</b>
                </ContainerPrice>
            </ContainerDetail>
        </Container>
    )
}

const Container = styled.div`
    box-shadow: 5px 5px 15px #cfcfcf;
    border-radius: 5px;
    background-color: #ffffffbe;
    backdrop-filter: blur(2px);
`

const ContainerImages = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    column-gap: .4em;
    flex-wrap: wrap;

    p{
        font-size: 14px;
    }

    img{
        width: 80px;
        border-radius: 15px;
    }

    div{
        width: fit-content;
    }
`

const ContainerPrice = styled.div`
    text-align: center;
    .total{
        text-transform: uppercase;
        font-weight: 600;
        color: #f50057;
    }
`
const ContainerDetail = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
`