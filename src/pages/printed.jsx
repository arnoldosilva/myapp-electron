import React from 'react'
import { Typography, Box, Stack, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import SorryImg from '../assets/printed/sorry.png'
import HomeImg from '../assets/base/home.png'
import paths from '../paths'


export default function PrintedPage() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('xl'))

    return (
        <Stack sx={{ width: '100%', height: '100%' }}>
            <Box sx={{ width: '100%' }}>
                <Box mt={matches ? 10 : 0} mb={matches ? 7 : 2} textAlign="center">
                    <img src={SorryImg} alt='sorry'/>
                </Box>
                <Typography variant={matches ? 'h1' : 'h2'} align="center" fontWeight={700} color="white">
                    SORRY,
                </Typography>
                <Typography variant={matches ? 'h2' : 'h4'} align="center" fontWeight={700} color="white">
                    ALREADY PRINTED. 
                </Typography>
                <Typography mt={7} variant={matches ? 'h3' : 'h5'} align="center" fontWeight={500} color="#F4F5F6">
                    Ask our staff for support.
                </Typography>
                
            </Box>
            <Box sx={{ width: '100%', alignItems: 'center',  display: 'flex', mt: 'auto', mb: -8 }}>
                <Link to={paths.home}>
                    <img src={HomeImg} alt="home" />
                </Link>
            </Box>
        </Stack>
    )
}