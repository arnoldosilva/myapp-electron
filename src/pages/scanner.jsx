import React from 'react'
import { QrReader } from 'react-qr-reader'
import { Typography, Stack, useMediaQuery } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import paths from '../paths';
import HomeImg from '../assets/base/home.png'
import BordaImg from '../assets/scanner/borda.png'



export default function ScannerPage() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('xl'))
    const navigate = useNavigate()

    const onResult  = async (result) => {
        if (!!result) {
            console.log(result?.text)
            navigate(paths.confirm)
        }
    }

    return (
        <>       
            <Stack sx={{ height: '100%', alignItems:'center' }}>
                <Typography mt={matches ? 8 : 2} variant={matches ? "h1" : "h2"} align="center" fontWeight={700} color="white">
                    QR CODE           
                </Typography>
                <Typography mt={4} mb={4} variant={matches ? "h3" : "h4"} align="center" fontWeight={500} color="#F4F5F6">
                    Point your cellphone to the camera.            
                </Typography>
                
                    <QrReader
                        onResult={onResult}
                        videoStyle={{
                            width: 'unset'
                        }}
                        containerStyle={{

                            width: matches ? 400 : 200,
                            height: matches ? 400 : 200,
                            padding: matches ? 20 : 10,
                            backgroundImage: `url(${BordaImg})`,
                            backgroundSize: 'cover'
                        }}
                    />
                
                <Stack sx={{ width: '100%' }} mt="auto" mb={-8} direction="row">
                    <Link to={paths.home}>
                        <img src={HomeImg} alt="img" />
                    </Link>
                </Stack>
            </Stack>
        </>
    )
}