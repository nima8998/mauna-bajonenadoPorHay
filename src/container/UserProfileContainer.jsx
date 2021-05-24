import React from 'react'
import styled from 'styled-components'
import ItemFavDetail from '../Components/ItemFavDetail'
import {useUserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'

export default function UserProfile() {
    const {favItem} = useUserContext();

    return (
        <Container>
            <FavItems>
                <h1>Tus favoritos: </h1>
                {
                    favItem <= 0 ? 
                    <h1>
                        ¿No tenes ningún producto favorito? Revisá nuestra
                        <Link to='/'> tienda</Link> 💕
                    </h1>
                    :
                    favItem.map((favs, i) => <ItemFavDetail key={i} props={favs}/>)
                }
            </FavItems>
            <BuyList>
                <h1>compras hechas</h1>
            </BuyList>
        </Container>
    )
}

const Container = styled.section`
    background-image: url('https://firebasestorage.googleapis.com/v0/b/ecommerce-mauna.appspot.com/o/flat0.png?alt=media&token=82c9566f-fce5-4377-ba37-70da773be4eb');
    background-size: contain;
    background-repeat: no-repeat;
    background-position-x: right;
    background-position-y: bottom;
    min-height: 600px;
    width: 85%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    column-gap: 1em;
    margin: auto;

    a{
        color: #f50057;
        text-decoration: none;
    }
`

const FavItems = styled.div`
    height: 100%;
    width: 100%;
    text-align: center;
`

const BuyList = styled.div`
    background-color: #ff020281;
    height: 100px;
    width: 100%;
`