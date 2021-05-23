import React, { useEffect, useState } from 'react'
import ItemList from '../Components/ItemList'
import CircularProgrss from '@material-ui/core/CircularProgress'
import { useParams } from 'react-router-dom'
import Bg from '../Components/Bg'
import styled from 'styled-components'
import { getFirestore } from '../firebase'

let ItemListContainer = () =>{
    let [articulo, setArticulo] = useState ([])
    let { paramCategory } = useParams()

    useEffect(()=>{
        const db = getFirestore();
        const itemsCollection = db.collection('items')
        itemsCollection.get()
        .then((querySnapShot)=>{ 
            const documentos = querySnapShot.docs.map((doc)=>{
                return{
                    id: doc.id,
                    ...doc.data()
                }
            });
            setArticulo(documentos)
        })
    }, [])

    return (
        <div>
            <Bg/>
            <Container>
                {
                    articulo.length > 0 && paramCategory === undefined ? articulo.map((dato)=><ItemList key={dato.id} props={dato}/>)
                    : articulo.length > 0 && paramCategory ? articulo.filter(x =>x.categoryId === `${paramCategory}`).map((dato)=><ItemList key={dato.id} props={dato}/>)
                    : <CircularProgrss color='secondary'/>
                }
            </Container>
        </div>
    )
}

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    column-gap: 3rem;
    row-gap: 5rem;
    margin: auto;
    max-width: 1300px;
    margin-top: -200px;
`

export default ItemListContainer
