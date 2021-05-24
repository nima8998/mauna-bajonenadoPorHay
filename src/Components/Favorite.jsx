import React from 'react'
import styled from 'styled-components'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {useUserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'
import Button from '@material-ui/core/Button'

export default function Favorite({props}) {

    const {addFav, isInFav, removeFav} = useUserContext();

    return (
        <Container>
            {
                isInFav(props.id) === false ? 
                    <div>
                        <span>Agregar a favoritos</span>
                        <FavoriteBorderIcon
                            fontSize='large'
                            color='secondary'
                            className='favoriteIcon'
                            onClick={()=>addFav(props)}
                        />
                    </div>
                        :
                    <div>
                        <span>Quitar de favoritos</span>
                        <FavoriteIcon
                            fontSize='large'
                            color='secondary'
                            className='favoriteIcon'
                            onClick={()=> removeFav(props.id)}
                        />
                    </div>
            }
            <Button
                variant='contained'
                color='secondary'
            >
                <Link to='/profile'>
                    Ver favoritos
                </Link>
            </Button>
            
        </Container>
    )
}

const Container = styled.section`
    margin-top: 5em;

    div{
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 1em;
    }

    .favoriteIcon{
        cursor: pointer;
        align-self: flex-start;
    }

    a{
        color: #fff;
        text-decoration: none;
        &:visited{
            color: #fff;
        }
    }
    Button{
        margin-top: 1em;
    }
`