import React from 'react'
import { Grid, Typography, Stack, useMediaQuery } from '@mui/material'
import { Link } from 'react-router-dom'
import paths from '../paths'
import Scanner from '../assets/home/scanner.png'
import Find from '../assets/home/find.png'
import Lost from '../assets/home/lost.png'


export default function HomePage() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('xl'))

    return (
        <Stack sx={{ height: '100%' }}>
            <Typography variant={matches ? "h1" : "h2"} align="center" fontWeight={700} color="white">
                WELCOME
            </Typography>
            <Typography mt={6} variant={matches ? "h3" : "h5"} align="center" fontWeight={500} color="#F4F5F6">
                Please access the QRCode received <br />
                by email or mms to print your badge.
            </Typography>
            <Grid container sx={{ mt: 'auto', mb: 6, alignSelf: 'center', width: '100%', justifyContent: 'space-between', alignItems: 'center' }} direction="row">
                <Grid item md={2} xl={3}>
                    <Link to={paths.scanner}>
                        <img src={Scanner} alt="img" style={{ width: '100%', maxWidth: '100%' }} />
                    </Link>
                </Grid>
                <Grid item md={2} xl={3}>
                    <Link to={paths.finder}>
                        <img src={Lost} alt="img" style={{ width: '100%', maxWidth: '100%' }} />
                    </Link>
                </Grid>
                <Grid item md={2} xl={3}>
                    <Link to={paths.finder}>
                        <img src={Find} alt="img" style={{ width: '100%', maxWidth: '100%' }} />
                    </Link>
                </Grid>
            </Grid>
        </Stack>
    )
}