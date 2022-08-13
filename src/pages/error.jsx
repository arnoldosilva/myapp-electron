import React from 'react'
import { Typography, Stack, Box, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import HomeImg from '../assets/base/home.png'
import AlertImg from '../assets/error/alert.png'
import RetryImg from '../assets/error/retry.png'
import paths from '../paths'


export default function ErrorPage() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('xl'))

    return (
        <Stack sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ width: '100%' }}>
                <Box mt={matches ? 10 : 0} mb={matches ? 7 : 2} textAlign="center">
                    <img src={AlertImg} alt='sorry'/>
                </Box>
                <Typography variant={matches ? 'h1' : 'h2'}  align="center" fontWeight={700} color="white">
                    SORRY,
                </Typography>
                <Typography variant={matches ? 'h2' : 'h4'} align="center" fontWeight={700} color="white">
                    LET’S TRY IT AGAIN
                </Typography>
                <Typography mt={7} variant={matches ? 'h3' : 'h5'} align="center" fontWeight={500} color="#F4F5F6">
                    Make sure your brightness is high and face your cellphone to the camera.
                </Typography>
            </Box>
            <Box sx={{ width: '100%', alignItems: 'center', justifyContent: 'space-between',  display: 'flex', mt: 'auto', mb: -8 }}>
                <Link to={paths.home}>
                    <img src={HomeImg} alt="home" />
                </Link>
                <Link to={paths.finder}>
                    <img src={RetryImg} alt="retry" />
                </Link>
            </Box>
        </Stack>
    )
}