import React, { useState, useEffect } from 'react'
import ItemDetail from '../Components/ItemDetail'
import CircularProgress from '@material-ui/core/CircularProgress'
import ItemCountContainer from './ItemCountCointainer'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

import {useCartContext} from '../Context/CartContext'


export default function ItemDetailContainer() {

    let [item, setItem] = useState([]);
    let { paramId } = useParams()

    let {addItems} = useCartContext()
    let [show, setShow] = useState(false)

    useEffect(() => {
        let getItem = () =>{
            return new Promise ((resolve, reject)=>{
                let datos =[
                {
                    id: '0',
                    title: 'BUZO NOT A BRAND',
                    tipo: 'Buzo',
                    desc: 'Buzo con capucha y tapaboca anexado. Estampa delantera',
                    logo: 'buzo.jpeg',
                    precio: 7190,
                    stock: 2
                },
                {
                    id: '1',
                    title: 'CROP TOP BATIK',
                    tipo: 'Buzo',
                    desc: 'Buzo corto con capucha  y cordon elastico',
                    logo: 'buzo1.jpeg',
                    precio: 4200,
                    stock: 5
                },
                {
                    id: '3',
                    title: 'BUZO BATIK BLACK',
                    tipo: 'Buzo',
                    desc: 'Buzo Canguro, con capucha y bordado 3d en el frente',
                    logo: 'buzo2.jpeg',
                    precio: 4390,
                    stock: 7
                },
                {
                    id: '4',
                    title: 'CAMISA ANIMAL WHITE',
                    tipo: 'Camisa',
                    desc: 'Camisa manga corta',
                    precio: 2990,
                    logo: 'camisa.jpeg',
                    stock: 4
                },
                {
                    id: '5',
                    title: 'CAMISA BATIK BLACK',
                    tipo: 'Camisa',
                    desc: 'Camisa Oversize de manga corta',
                    precio: 3690,
                    logo: 'camisa1.jpeg',
                    stock: 2
                },
                {
                    id: '6',
                    title: 'CAMPERA PUFFER KOTK BLACK',
                    tipo: 'Campera',
                    desc: 'Campera inflada con bolsillos con cierre y puños con boton. Cintura ajustabe con elasticos interos',
                    precio: 19900,
                    logo: 'campera.jpeg',
                    stock: 6
                },
                {
                    id: '7',
                    title: 'CAMPERA PUFFER KOTK RED',
                    tipo: 'Campera',
                    desc: 'Campera inflada con bolsillos con cierre y puños con boton. Cintura ajustabe con elasticos interos',
                    precio: 19900,
                    logo: 'campera1.jpeg',
                    stock: 7
                },
                ];
                setTimeout(() => {
                    resolve(datos)
                }, 2000);
            })
        }
        getItem().then(dato =>{
            let itemFilter = dato.filter(x => x.id === `${paramId}`)
            setItem(itemFilter)})
        },[]);

        // function para agregar el item
        const onAdd = count =>{
            addItems(count, item[0])
            setShow(true)
        }
        
        // setea el estado en true si el item filtrado esta en el car

    return (
        <ItemDetalContainer>
            {/* info del producto */}
            {
                item.length > 0 ? 
                <ItemDetail props={item[0]}/> :
                <CircularProgress color='secondary'/>
            }
            {/* componente para agregar cantidad y agregar al carrito */}
            {
                item.length > 0 ?
                <ItemCountContainer props={item[0]} onAdd={onAdd} show={show}/> 
                :
                null
            }
        </ItemDetalContainer>
    )

}

    const ItemDetalContainer = styled.div`
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: center;
        align-self: center;
        margin: auto;
    `