import React, { useState, useEffect } from 'react'
import Item from '../Components/Item'
import CircularProgrss from '@material-ui/core/CircularProgress'

import '../css/ItemList.css'

const ItemList = () => {
    let [lugares, setLugares] = useState ([])

    
    useEffect(()=>{
        let task = new Promise((resolve, reject) =>{
                let datos =[
                {
                    id: 0,
                    title: 'Buzo not a Brand',
                    tipo: 'Buzo',
                    desc: 'Buzo con capucha y tapaboca anexado. Estampa delantera',
                    logo: '/img/products/buzo.jpeg',
                    stock: 7
                },
                {
                    id: 1,
                    title: 'Pantalon Mutant Black',
                    tipo: 'Pantalon',
                    desc: 'Pantalón tipo cargo con cintura elástica y cordón. Con cierre en rodilas desmontable.',
                    logo: '/img/products/pantalon.jpeg',
                    stock: 4
                }];
                setTimeout(()=>{
                    resolve(datos)
                }, 2000)
            })
            task.then((res)=>{
                setLugares(res)
            })

        }, [])

    return (
        <div className='ItemList'>
                {
                    lugares.length > 0 ? lugares.map((lugar)=>
                    <Item
                        key={lugar.id} 
                        title={lugar.title} 
                        tipo={lugar.tipo} 
                        desc={lugar.desc} 
                        logo={lugar.logo}
                        stock={lugar.stock}
                    />) : <CircularProgrss color='secondary'/>
                }
        </div>
    )
}

export default ItemList
