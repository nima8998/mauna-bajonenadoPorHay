import React, { useState, useEffect } from 'react'
import Item from '../Components/Item'
import CircularProgrss from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'

import '../css/ItemList.css'

const ItemList = () => {
    let [articulo, setArticulo] = useState ([])

    
    useEffect(()=>{
        let task = new Promise((resolve, reject) =>{
                let datos =[
                {
                    id: 0,
                    title: 'Buzo not a Brand',
                    tipo: 'Buzo',
                    desc: 'Buzo con capucha y tapaboca anexado. Estampa delantera',
                    logo: 'buzo.jpeg',
                    precio: 1599,
                    stock: 7
                },
                {
                    id: 1,
                    title: 'Pantalon Mutant Black',
                    tipo: 'Pantalon',
                    desc: 'Pantalón tipo cargo con cintura elástica y cordón. Con cierre en rodilas desmontable.',
                    precio: 899,
                    logo: 'pantalon.jpeg',
                    stock: 4
                }
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
        <div className='ItemList'>
                {
                    articulo.length > 0 ? articulo.map((articulo)=>
                    <Link key={articulo.id} 
                    to={`/item/id${articulo.id}/${articulo.title}/${articulo.precio}/${articulo.stock}/${articulo.logo}/${articulo.desc}`}>
                        <Item
                            title={articulo.title} 
                            tipo={articulo.tipo} 
                            desc={articulo.desc} 
                            logo={articulo.logo}
                            stock={articulo.stock}
                        />
                    </Link>
                    ) : <CircularProgrss color='secondary'/>
                }
        </div>
    )
}

export default ItemList
