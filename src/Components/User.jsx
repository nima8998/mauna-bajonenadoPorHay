import React from 'react'
import Button from '@material-ui/core/Button'
import {useUserContext} from '../Context/UserContext'
import styled from 'styled-components'

export default function User() {
    const {userThumbnail, userLogged, logOut} = useUserContext();
    
    return (
        <Thumbnail>
            <span>{userLogged}</span>
            <img src={userThumbnail} alt="user google logo" />
            <Button
                variant='contained'
                color='secondary'
                size='small'
                onClick={logOut}
            >
                Logout
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
`
