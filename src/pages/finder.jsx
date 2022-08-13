import React from 'react'
import { Typography, Stack, useMediaQuery } from '@mui/material'
import { TextField } from '../components'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import paths from '../paths';
import HomeImg from '../assets/base/home.png'
import ConfirmImg from '../assets/base/confirm.png'



export default function FinderPage() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('xl'))
    const { control, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        navigate(paths.confirm)
    }

    return (
        <Stack sx={{ height: '100%' }}>
            <Typography mt={matches ? 12 : 0} variant={matches ? "h1" : "h2"} align="center" fontWeight={700} color="white">
                DATA FINDER
            </Typography>
            <Typography mt={6} mb={matches ? 10 : 0} variant={matches ? "h3" : "h4"} align="center" fontWeight={500} color="#F4F5F6">
                Enter CellPhone or E-mail to Find your Data.
            </Typography>

            <Stack sx={{ display: 'flex', width: '70%', mx: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack spacing={3} sx={{ width: '100%' }}>
                        <TextField 
                            placeholder="CellPhone"
                            control={control}
                            name="cellphone"
                            sx={{ marginBottom: '40px' }}
                        />
                        <TextField 
                            placeholder="Email"
                            control={control}
                            name="email"
                        />
                    </Stack>
                </form>
            </Stack> 
            <Stack mt="auto" mb={-8} direction="row" justifyContent="space-between">
                <Link to={paths.home}>
                    <img src={HomeImg} alt="img" />
                </Link>
                <img 
                    style={{ cursor: 'pointer' }} 
                    src={ConfirmImg}
                    alt="img" 
                    onClick={handleSubmit(onSubmit)} 
                />
            </Stack>
        </Stack>
    )
}