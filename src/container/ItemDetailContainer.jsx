import React, {useState, useEffect} from 'react'
import ItemDetail from '../Components/ItemDetail'
import CircularProgress from '@material-ui/core/CircularProgress'
import '../css/ItemDetailContainer.css'

export default function ItemDetailContainer() {

    let [item, setItem] = useState({});

    useEffect(() => {
        let getItem = () =>{
            return new Promise ((resolve, reject)=>{
                setTimeout(() => {
                    resolve(
                        {
                            id: 1,
                            title: 'Pantalon Mutant Black',
                            categoria: 'Pantalon',
                            logo: '/img/products/pantalon.jpeg',
                            stock: 9,
                            precio: '4.790',
                            description: {
                                info: 'Pantalón tipo cargo con cintura elástica y cordón. Con cierre en rodilas desmontable.',
                                terminacion: 'Terminación con puño elástico',
                                material: 'Microfibra',
                                color: 'Negro',
                            },
                            talles: {
                                talle1: 'ancho 41 cm, largo 97 cm',
                                talle2: 'ancho 44 cm, largo 98 cm',
                                talle3: 'ancho 47 cm, largo 99 cm',
                                talle4: 'ancho 50 cm, largo 100 cm',
                            }
                        })
                }, 2000);
            })
        }
        getItem().then(dato => setItem(dato))
    }, []);

    return (
        <div className='ItemDetailContainer'>
            {
                Object.entries(item).length >  0 ? <ItemDetail props={item}/> : <CircularProgress color='secondary'/>
            }
        </div>

        
    )
}
