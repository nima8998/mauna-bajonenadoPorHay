import React from 'react'
import '../css/Bg.css'
import styled from 'styled-components'

export default function Bg() {
    return (
        <Background></Background>
    )
}

const Background = styled.div`
    background-image: url('https://firebasestorage.googleapis.com/v0/b/ecommerce-mauna.appspot.com/o/Bg.png?alt=media&token=46a1ac89-297a-4bdf-9978-00c56d9c95d6');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 400px;
    mask-image: linear-gradient(to bottom, #000000, #00000000);
    position: relative;
    z-index: -1;
`