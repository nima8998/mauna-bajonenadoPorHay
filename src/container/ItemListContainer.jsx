import React, { useEffect, useState } from 'react'
import ItemList from '../Components/ItemList'
import CircularProgrss from '@material-ui/core/CircularProgress'
import { useParams } from 'react-router-dom'
import Bg from '../Components/Bg'
import styled from 'styled-components'

let ItemListContainer = () =>{
    let [articulo, setArticulo] = useState ([])
    let { paramCategory } = useParams()

    useEffect(()=>{
        let task = new Promise((resolve, reject) =>{
                let datos =[
                {
                    id: 0,
                    title: 'BUZO NOT A BRAND',
                    tipo: 'Buzo',
                    desc: 'Buzo con capucha y tapaboca anexado. Estampa delantera',
                    logo: 'buzo.jpeg',
                    precio: '7.190',
                    stock: 2
                },
                {
                    id: 1,
                    title: 'CROP TOP BATIK',
                    tipo: 'Buzo',
                    desc: 'Buzo corto con capucha  y cordon elastico',
                    logo: 'buzo1.jpeg',
                    precio: '4.200',
                    stock: 5
                },
                {
                    id: 3,
                    title: 'BUZO BATIK BLACK',
                    tipo: 'Buzo',
                    desc: 'Buzo Canguro, con capucha y bordado 3d en el frente',
                    logo: 'buzo2.jpeg',
                    precio: '4.390',
                    stock: 7
                },
                {
                    id: 4,
                    title: 'CAMISA ANIMAL WHITE',
                    tipo: 'Camisa',
                    desc: 'Camisa manga corta',
                    precio: '2.990',
                    logo: 'camisa.jpeg',
                    stock: 4
                },
                {
                    id: 5,
                    title: 'CAMISA BATIK BLACK',
                    tipo: 'Camisa',
                    desc: 'Camisa Oversize de manga corta',
                    precio: '3.690',
                    logo: 'camisa1.jpeg',
                    stock: 2
                },
                {
                    id: 6,
                    title: 'CAMPERA PUFFER KOTK BLACK',
                    tipo: 'Campera',
                    desc: 'Campera inflada con bolsillos con cierre y puños con boton. Cintura ajustabe con elasticos interos',
                    precio: '19.900',
                    logo: 'campera.jpeg',
                    stock: 6
                },
                {
                    id: 7,
                    title: 'CAMPERA PUFFER KOTK RED',
                    tipo: 'Campera',
                    desc: 'Campera inflada con bolsillos con cierre y puños con boton. Cintura ajustabe con elasticos interos',
                    precio: '19.900',
                    logo: 'campera1.jpeg',
                    stock: 7
                },
            ];
            setTimeout(()=>{
                resolve(datos)
            }, 2000)
        })
        task.then((res)=>{
            setArticulo(res)
        })
    }, [])

    return (
        <div>
            <Bg/>
            <Container>
                {
                    articulo.length > 0 && paramCategory === undefined ? articulo.map((dato)=>
                    <ItemList key={dato.id} props={dato}/>)
                    : articulo.length > 0 && paramCategory ? articulo.filter(x => x.tipo === `${paramCategory}`)
                    .map((dato)=><ItemList key={dato.id} props={dato}/>)
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
