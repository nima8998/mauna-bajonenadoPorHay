import React from 'react'
import Button from '@material-ui/core/Button'
import styled from 'styled-components'
import { device } from '../css/MediaQueries'
import {useUserContext} from '../Context/UserContext'
import {Link} from 'react-router-dom'

export default function User() {
    const {userThumbnail, userLogged, logOut} = useUserContext();
    
    return (
        <Thumbnail>
            <Link to='/profile' replace>
                <Button
                    color='primary'
                    variant='contained'
                >
                    {userLogged}
                </Button>
            </Link>
            <img src={userThumbnail} alt="user google logo" />
            <Button
                variant='contained'
                color='secondary'
                size='small'
                onClick={logOut}
            >
                <Link to='/' replace>
                    Logout
                </Link>
            </Button>
        </Thumbnail>
    )
}

const Thumbnail = styled.div`
    display: flex;
    align-items: center;
    column-gap: 1em;
    padding-left: 3em;

    img{
        width: 50px;
        border-radius: 50%;

    }

    Button{
        padding: .4em .8em;
        font-size: 12px;
    }

    a{
        color: #fff;
        &:visited{
            color: #fff;
        }
    }

    @media ${device.mobile}{
        flex-direction: column;
        row-gap: 1em;
        margin-top: .5em;
        padding: 0;
    }

`
