import React from 'react'
import '../css/ItemListContainer.css'

export const ItemListContainer = ({greeting}) =>{
    return (
        <div className="Greeting">
            <h1>{greeting}</h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quia earum, consectetur eaque ipsum ad est, totam temporibus velit nostrum, praesentium fugit consequatur voluptatum architecto perferendis minima ipsam maxime! Animi. 
            </p>
        </div>
    )
}