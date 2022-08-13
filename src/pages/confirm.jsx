import React from 'react'
import { Typography, Stack, useMediaQuery } from '@mui/material'
import { TextField } from '../components'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import paths from '../paths'
import HomeImg from '../assets/base/home.png'
import ConfirmImg from '../assets/base/confirm.png'
import NameImg from '../assets/confirm/name.png'
import EmailImg from '../assets/confirm/email.png'
import RoleImg from '../assets/confirm/role.png'
import CompanyImg from '../assets/confirm/company.png'


export default function ConfirmPage() {
    const matches = useMediaQuery((theme) => theme.breakpoints.up('xl'))
    const { control, handleSubmit } = useForm()
    const navigate = useNavigate()

    const onSubmit = (data) => {
        console.log(data)
        navigate(paths.congrats)
    }

    return (
        <Stack sx={{ height: '100%' }}>
            <Typography variant={matches ? 'h1' : 'h2'}  align="center" fontWeight={700} color="white">
                CONFIRM YOUR DATA
            </Typography>
            <Typography mt={matches ? 6 : 0} mb={matches ? 10 : 1}  variant={matches ? 'h3' : 'h4'} align="center" fontWeight={500} color="#F4F5F6">
                Please enter your data to print your QRCode.
            </Typography>

            <Stack sx={{ display: 'flex', width: '70%', mx: 'auto' }}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Stack gap={matches ? 3 : 1} sx={{ width: '100%' }}>
                        <Stack direction="row" gap={3}>
                            <img style={{ width: matches ? '92px' : '66px' }} src={NameImg} alt="name" />
                            <TextField 
                                placeholder="Name"
                                control={control}
                                name="name"
                                fullWidth
                            />
                        </Stack>
                        <Stack direction="row" gap={3}>
                            <img style={{ width: matches ? '92px' : '66px' }} src={EmailImg} alt="email" />
                            <TextField 
                                placeholder="Email"
                                control={control}
                                name="email"
                                fullWidth
                            />
                        </Stack>
                        <Stack direction="row" gap={3}>
                            <img style={{ width: matches ? '92px' : '66px' }} src={RoleImg} alt="role" />
                            <TextField 
                                placeholder="Role"
                                control={control}
                                name="role"
                                fullWidth
                            />
                        </Stack>
                        <Stack direction="row" gap={3}>
                            <img style={{ width: matches ? '92px' : '66px' }} src={CompanyImg} alt="company" />
                            <TextField 
                                placeholder="Company"
                                control={control}
                                name="company"
                                fullWidth
                            />
                        </Stack>
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