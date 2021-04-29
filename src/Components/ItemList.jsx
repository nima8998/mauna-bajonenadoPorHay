import React from 'react'
import Item from '../Components/Item'
import { Link } from 'react-router-dom'

import '../css/ItemList.css'

const ItemList = ({props}) => {
    
    return (
        <div className='ItemList'>
            {
                <Link key={props.id} 
                to={`/item/${props.id}`}>
                    <Item 
                    logo={props.logo}
                    tipo={props.tipo} 
                    title={props.title}             
                    />
                </Link>
            }
        </div>
    )

}

export default ItemList
