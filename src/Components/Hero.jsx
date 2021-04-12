import React from 'react'
import "../css/Hero.css"
import Hero from '../img/Hero.jpg'

export default function Bg() {
    return (
        <img src={Hero} alt="Hero photo" className="Hero"/>
    )
}