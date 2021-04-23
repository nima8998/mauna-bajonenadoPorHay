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
                    title: 'Producto 1',
                    tipo: 'Categoria de indumentaria',
                    desc: 'Descripcion de producto. Medidas de los talles: ',
                    logo: '../img/lugares/burgerCompany.png',
                    stock: 7
                },
                {
                    id: 1,
                    title: 'Producto 2',
                    tipo: 'Categoria de indumentaria',
                    desc: 'Descripcion de producto. Medidas de los talles: ',
                    logo: '../img/lugares/burgerCompany.png',
                    stock: 4
                },
                {
                    id: 2,
                    title: 'Producto 3',
                    tipo: 'Categoria de indumentaria',
                    desc: 'Descripcion de producto. Medidas de los talles: ',
                    logo: '../img/lugares/burgerCompany.png',
                    stock: 8
                },
                {
                    id: 3,
                    title: 'Producto 4',
                    tipo: 'Categoria de indumentaria',
                    desc: 'Descripcion de producto. Medidas de los talles: ',
                    logo: '../img/lugares/burgerCompany.png',
                    stock: 10
                }
                ];
                setTimeout(()=>{
                    resolve(datos)
                }, 2000)
            })
            task.then((res)=>{
                setLugares(res)
            })
            .catch(()=>{
                console.error('Error en promise')
            })
            .finally(()=>{
                console.log('Promise ok')
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
