import React, {useState} from 'react'
import ItemCount from '../Components/ItemCount'
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import styled from 'styled-components'
import Favorite from '../Components/Favorite'
import {useUserContext} from '../Context/UserContext'

export default function ItemCountCointainer({props, onAdd, show, showFav}) {

    const {userLogged} = useUserContext();
    let disabledBtn = false
    let disabledBuy = false
    let [stockLocal, setStockLocal] = useState(props.stock)
    let [stockCliente, setStockCliente] = useState (0)
    let [talle, setTalle] = useState();


    let sumar = () =>{
        if (stockLocal === stockCliente) {
            disabledBtn = true
        }else{
            setStockCliente(stockCliente +1)
        }
    }

    let restar = () =>{
        if (stockCliente === 0) {
            disabledBtn = true
        }else{
            setStockCliente(stockCliente -1)
        }
    }

    if (stockCliente === 0 || talle === undefined) {
        disabledBuy = true
    }

    const addToCart = () =>{
        onAdd(stockCliente, talle)
        setStockLocal(stockLocal - stockCliente)
    }

    const handleChange = (event) => {
        setTalle(event.target.value);
    };


    return (
        <PayAdd className='col-sm-12 col-md-auto'>
            <TalleContainer>
                <FormControl>
                    <FormLabel>Talle</FormLabel>
                        <RadioGroup row onChange={handleChange}>
                            <FormControlLabel value="Talle 1" control={<Radio />} label="Talle 1" />
                            <FormControlLabel value="Talle 2" control={<Radio />} label="Talle 2" />
                            <FormControlLabel value="Talle 3" control={<Radio />} label="Talle 3" />
                        </RadioGroup>
                </FormControl>
            </TalleContainer>

            <ItemCount 
                onAdd={onAdd}
                show={show}
                sumar={sumar}
                restar={restar}
                addToCart={addToCart}
                stockLocal={stockLocal}
                stockCliente={stockCliente}
                disabledBtn={disabledBtn}
                disabledBuy={disabledBuy}
            />
            {
                userLogged !== undefined && <Favorite props={props} showFav={showFav}/>
            }
        </PayAdd>
    )
}

const PayAdd = styled.div`
    background-color: #fff;
    padding: 1em;
    border-radius: 10px;
    text-align: center;
    margin: 2em;
    height: 100%;
    box-shadow: 5px 5px 15px #e4e4e4;
`

const TalleContainer = styled.div`
    text-align: center;
`