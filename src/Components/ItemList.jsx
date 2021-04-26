import React from 'react'
import Item from '../Components/Item'
// import CircularProgrss from '@material-ui/core/CircularProgress'
import { Link } from 'react-router-dom'

import '../css/ItemList.css'

const ItemList = ({props}) => {
    
    return (
        <div className='ItemList'>
                {
                    <Link key={props.id} 
                    to={`/item/id${props.id}/${props.title}/${props.precio}/${props.stock}/${props.logo}/${props.desc}`}>
                        <Item 
                        props={props}
                        logo={props.logo}
                        tipo={props.tipo}              
                        />
                    </Link>
                }
        </div>
    )

}

export default ItemList
