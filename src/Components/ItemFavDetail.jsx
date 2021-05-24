import React from 'react'
import styled from 'styled-components'
import {useUserContext} from '../Context/UserContext'
import Button from '@material-ui/core/Button'

export default function ItemFavDetail(props) {

    const info = props.props;
    const {removeFav} = useUserContext();

    return (
        <Container>
            <ContainerImage>
                <img src={info.image} alt="" />
            </ContainerImage>
            <ContainerDetail>
                <h1>{info.title}</h1>
                <p>{info.description}</p>
            </ContainerDetail>
            <ContainerButtons>
                <Button
                    variant='outlined'
                    color='secondary'
                    onClick={()=>removeFav(info.id)}
                >
                    Quitar
                </Button>
            </ContainerButtons>
        </Container>
    )
}

const Container = styled.section`
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 5px 5px 15px #cfcfcf;
    border-radius: 5px;
    height: 100px;
    margin: 1em 0;
`
const ContainerImage = styled.div`
    img{
        width: 75px;
    }
`

const ContainerDetail = styled.div`
    height: 100%;
    width: 50%;
`

const ContainerButtons = styled.div`

`

