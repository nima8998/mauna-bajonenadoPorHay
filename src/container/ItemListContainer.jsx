import React from 'react'

let style ={
    color: "#fff",
    transform: "rotate(10deg)",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    height: 250,
    width: 450,
    letterSpacing: 3,
    fontSize: 24
}

export const ItemListContainer = ({greeting}) =>{
    return (
        <h1 style={style}>{greeting} </h1>
    )
}