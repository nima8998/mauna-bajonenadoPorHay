import React from 'react'
import Logo from '../img/logo.jpg'

let styleLogo = {
    width: '4rem',
    borderRadius: '50%',
    marginRight: '5rem',
}

export default function CartWidget() {
    return (
        <img src={Logo} alt="logo" style={styleLogo} />
    )
}