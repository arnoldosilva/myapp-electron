import React from 'react'
import { Typography, Stack } from '@mui/material'
import CongratsImg from '../assets/congrats/lendingcon.png'


export default function CongratsPage() {
    return (
        <Stack sx={{ width: '100%', height: '100%' }}>
             <Typography variant="h1" align="center" fontWeight={700} color="white">
                GREAT! 
            </Typography>
            <Typography variant="h2" align="center" fontWeight={700} color="white">
                ENJOY YOUR STAY.
            </Typography>
            <Stack direction="row" my={6} justifyContent="center" gap={10}>
                <img src={CongratsImg} alt="CongratsImg" />
                <Typography sx={{ lineHeight: 1.3 }} variant="h3" fontWeight={500} color="#F4F5F6">
                    Our host is <br /> going to help <br />  you with <br /> your badge.
                </Typography>
            </Stack>
            <Typography sx={{ lineHeight: 1.3 }} align="center" variant="h3" fontWeight={500} color="#F4F5F6">
                BRISA is pleased to support you needs... Check out our website: www.brisausa.com
            </Typography>
        </Stack>
    )
}
