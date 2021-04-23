import React from 'react'
import Cart from '@material-ui/icons/ShoppingCartOutlined'

export default function CartWidget() {
    let style={
        marginLeft: '5rem'
    }

    return (
        <div>
            <Cart color="primary" style={style}/>
        </div>
    )
}