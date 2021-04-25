import React, {useState, useEffect} from 'react'
import ItemDetail from '../Components/ItemDetail'
import CircularProgress from '@material-ui/core/CircularProgress'

import '../css/ItemContainDetail.css'

export default function ItemDetailContainer() {

    let [item, setItem] = useState({});

    useEffect(() => {
        let getItem = () =>{
            return new Promise ((resolve, reject)=>{
                setTimeout(() => {
                    resolve(
                        {
                            id: 1,
                            title: 'Producto 1',
                            categoria: 'Pantalon',
                            description: 'Descripcion del producto',
                            logo: '/img/products/productoLogo.jpeg',
                            stock: 9,
                            precio: '1399,99'
                        })
                }, 2000);
            })
        }
        getItem().then(dato => setItem(dato))
    }, []);

    console.log(item)

    return (
        <div>
            {
                Object.entries(item).length >  0 ? <ItemDetail props={item}/> : <CircularProgress color='secondary'/>
            }
        </div>

        
    )
}
