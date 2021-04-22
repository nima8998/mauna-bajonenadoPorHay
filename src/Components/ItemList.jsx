import React, { useState, useEffect } from 'react'
import Item from '../Components/Item'

import '../css/ItemList.css'

const ItemList = () => {
    let [lugares, setLugares] = useState ([])

    
    useEffect(()=>{
        let task = new Promise((resolve, reject) =>{
                let datos =[
                {
                    id: 0,
                    title: 'The Burger Company',
                    direccion: 'Honduras 4733',
                    tipo: 'Hamburguesas',
                    exp: '"Cuando te pones una campera que no usas hace un monton, metes la mano en el bolsillo y encontras plata, que igualmente es tuya"',
                    logo: '../img/lugares/burgerCompany.png',
                    dispo: 7
                },
                {
                    id: 1,
                    title: 'Campo Bravo',
                    direccion: 'Honduras 5600',
                    tipo: 'Comida celíaca',
                    exp: 'No lo sabemos',
                    logo: '../img/lugares/burgerCompany.png',
                    dispo: 4
                },
                {
                    id: 2,
                    title: 'El Tejano',
                    direccion: 'Av. Cordoba 5267',
                    tipo: 'Restobar',
                    exp: '"Como el fideo Di Maria cuando metió ese gol que se lo terminó dedicando a la abuela"',
                    logo: '../img/lugares/burgerCompany.png',
                    dispo: 8
                },
                {
                    id: 3,
                    title: 'Foster Nutrition',
                    direccion: 'Tucuman 422',
                    tipo: 'Smart restaurant',
                    exp: '"Como Marty McFly cuando la madre le empieza a tirar onda"',
                    logo: '../img/lugares/burgerCompany.png',
                    dispo: 10
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
                lugares.map((lugar)=>
                <Item
                    key={lugar.id} 
                    title={lugar.title} 
                    direccion={lugar.direccion} 
                    tipo={lugar.tipo} 
                    exp={lugar.exp} 
                    logo={lugar.logo}
                    dispo={lugar.dispo}
                />)
            }
        </div>
    )
}

export default ItemList
