import React, {useEffect, useState} from 'react'
import {device} from '../css/MediaQueries'
import styled from 'styled-components'
import flatNewIn from '../img/product_hunt.png'
import CircularProgrss from '@material-ui/core/CircularProgress'
import ItemList from '../Components/ItemList'
import {getFirestore} from './../firebase'

export default function HomeContainer() {
    const [primerosTres, setPrimerosTres] = useState([])

    useEffect(() => {
        const db = getFirestore();
        const firstProductos = db.collection('items');
        firstProductos.get()
            .then((querySnapshot)=>{
                const primerosTres = querySnapshot.docs.map((item)=>{
                    return{
                        ...item.data()
                    }
                })
                setPrimerosTres(primerosTres.slice(0, 3))
            })
            .catch((err)=>{
                console.log('error en firestore homeContainer', err)
            })
        }, [])

        
    return (
        <Container>
            <ContainerTitle>
                <h1>New in!</h1>
                <img src={flatNewIn} alt="product_hunt_storyset" className='flatNewIn'/>
            </ContainerTitle>
            {
                primerosTres >= 0 ? <CircularProgrss color='secondary' /> : primerosTres.map((i, key)=><ItemList key={key}props={i}/>)
            }
        </Container>
    )
}

const Container = styled.div`
    height: 100%;
    width: 65%;
    display: flex;
    column-gap: 1em;
    row-gap: 1em;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 5em;
    margin: auto;

    .ItemCard{
        img{
            width: 14em;
        }
    }
    
    .flatNewIn{
        width: 22em;
    }
`

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    
    h1{
        font-size: 22px;
        margin: auto;
    }

    @media ${device.mobile}{
        .flatNewIn{
            margin-bottom: -10em;
        }
    }

    @media ${device.tablet}{
        .flatNewIn{
            margin-bottom: -10em;
        }
    }
`