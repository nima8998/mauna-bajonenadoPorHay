import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import ItemFavDetail from '../Components/ItemFavDetail'
import {useUserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import {getFirestore} from '../firebase'
import OrderListDetail from '../Components/OrderListDetail'
import CircularProgrss from '@material-ui/core/CircularProgress'

export default function UserProfile() {
    
    const {favItem} = useUserContext();
    const [orders, setOrders] = useState([])
    const [loading, setLoading] = useState(true)
    
    
    useEffect(() => {
        const db = getFirestore()
        const dataCollection = db.collection('orders')
            dataCollection.get()
            .then((querySnapshot)=>{
                    const docs = querySnapshot.docs.map(doc =>{
                        return{
                            id: doc.id,
                            ...doc.data()
                        }}
                    )
                    const docsFiltered = docs.filter(doc => doc.buyer.email === localStorage.getItem('user_email'))
                    setOrders(docsFiltered)
                    setLoading(false)
                })
                .catch((err)=>{
                    console.log(err)
                })
        }, [])

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
                {
                    loading === true ? <CircularProgrss className='loader' color='secondary'/>
                    : orders.length > 0 ? orders.map((orders, i) => <OrderListDetail key={i} props={orders}/>)
                    : <h1>¡Aún no hiciste compras! 😢</h1>
                }
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
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    flex-direction: column;
    row-gap: 1em;
    *{
        width: 100%;
    }
    .loader{
        margin: auto;
    }
`
