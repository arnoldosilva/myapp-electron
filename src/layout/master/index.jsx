import React from 'react'
import { Outlet } from 'react-router-dom'
import { styled, Container } from '@mui/material'
import Bg from '../../assets/base/bg.png'
import Logo from '../../assets/base/logo-brisa.png'


const Background = styled('div')`
    background-image: url('${Bg}');
    background-position: center;
    background-size: cover;
    width: 100%;
    height: 100vh;
`

const Footer = styled('div')`
    margin-top: auto;
    width: 100%;
    display: flex;
    justify-content: center;
`

const Card = styled('div')`
    background-color: #fff;
    padding: 1.375rem 6rem 4.25rem 6rem;
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
`


export default function MasterPage() {
    return (
        <Background>
           <Container sx={{ paddingTop: '3rem', height: 'calc(100% - 11.9rem)' }}>
                <Outlet />
            </Container>
            <Footer>
                <Card>
                    <img src={Logo} alt="logo" />
                </Card>
            </Footer>
        </Background>
    )
}
