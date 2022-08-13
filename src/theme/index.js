import { createTheme } from '@mui/material'


const theme = createTheme({
    typography: {
        fontFamily: [
            'Montserrat',
            'Arial',
            'sans-serif',
        ].join(','),
    },
    breakpoints: {
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1679,
        },
    },
    components: {
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '45px',
                    backgroundColor: '#fff',
                    
                    color: '#7A7A7A',
                    fontWeight: 500,
                    border: 'solid 5px #12869D',
                    '@media (min-width: 1579px)': {
                        paddingLeft: '32px',
                        fontSize: '2.5rem',
                        height: '92px',
                    }
                }
            },
        },
        MuiContainer: {
            styleOverrides: {
                root: {
                    '@media (min-width: 1579px)': {
                        maxWidth: '1400px'
                    }
                }
            }
        }       
    },
    palette: {
        primary: {
            main: '#12869D',
        },
      },
})

theme.typography.h1 = {
    fontSize: '6rem',
    [theme.breakpoints.up('xl')]: {
        fontSize: '6.875rem'
    }
}

theme.typography.h2 = {
    fontSize: '3.75rem',
    [theme.breakpoints.up('xl')]: {
        fontSize: '5rem'
    }
}

theme.typography.h3 = {
    fontSize: '3rem',
    [theme.breakpoints.up('xl')]: {
        fontSize: '3.125rem'
    }
}

export default theme
