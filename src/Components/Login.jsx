import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { useUserContext } from '../Context/UserContext'
import styled from 'styled-components'

export default function Login({message}) {

    const { responseGoogle } = useUserContext();

    return (
        <Container>
            <span>{message}</span>
            <GoogleLogin
                    clientId='1007339188412-lqiv7qp0vbpkgldhkijjf8qgj2di6c9l.apps.googleusercontent.com'
                    buttonText="Login"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    cookiePolicy={'single_host_origin'}
                    />
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    
    span{
        padding-bottom: 5px;
        letter-spacing: .8px;
        font-weight: 550;
    }
`