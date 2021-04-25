import React from 'react'
import ItemCount from './ItemCount'
import Talle from './Talle'

import '../css/ItemDetail.css'

export default function ItemDetail({props}) {
    return (

        <div className='ItemDetail'>
            <div className="ItemDetail__image">
                <img src={props.logo} alt="image"/>

                <div className='ItemDetail__description'>
                    <ul>
                        <li>{props.description.info}</li>
                        <li>{props.description.terminacion}</li>
                        <li>{props.description.material}</li>
                        <li>{props.description.color}</li>
                    </ul>
                </div>
            </div>

            <div className="ItemDetail__info">
                <h2>{props.title}</h2>
                <p>$ {props.precio}</p>
                <div className='ItemDetail__info-add'>
                    <Talle/>
                    <ItemCount/>
                </div>
            </div>
        </div>
        
            // <Card>
            //     <CardHeader title={props.title} />            
            //     <CardMedia image={props.logo}/>
            //     <CardContent component='b'>
            //         {props.categoria}
            //     </CardContent>
            //     <CardContent component='p'>
            //         {props.description}
            //     </CardContent>

            //     <CardContent>
            //         <Talle/>
            //     </CardContent>

            //     <CardContent component='h2'>
            //         $ {props.precio}
            //     </CardContent>

            //     <ItemCount stock={props.stock}/>

            // </Card>
    )
}
