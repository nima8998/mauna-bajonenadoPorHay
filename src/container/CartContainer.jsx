import React from 'react'
import Cart from '../Components/Cart'

export default function CartContainer() {

    let datos =
        {
            id: 0,
            title: 'BUZO NOT A BRAND',
            tipo: 'Buzo',
            desc: 'Buzo con capucha y tapaboca anexado. Estampa delantera',
            logo: 'https://d3ugyf2ht6aenh.cloudfront.net/stores/219/431/products/2c08baea-f04b-41f4-b6ad-e7348ed3e7b51-5f346ff3e546cda3eb16166944921258-1024-1024.jpeg',
            precio: '7.190',
            stock: 2
        }
    

    return (
        <Cart props={datos}/>
    )
}
