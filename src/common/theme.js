import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  }
})

const appTheme = createMuiTheme({
  palette: {
    primary: { main: '#6832e3' },
    secondary: { main: '#9453CE' }
  },
  typography: {
    fontFamily: [
      'Helvetica',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    fontStyle: 'normal',
    h1: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#3C3E40',
      [theme.breakpoints.down('sm')]: {
        fontSize: '34px'
      }
    },
    h2: {
      fontSize: '24px',
      fontWeight: 'bold',
      color: '#3C3E40'
    },
    h4: {
      fontSize: '16px',
      fontWeight: 'bold',
      color: '#3C3E40'
    },
    body1: {
      fontSize: '15px',
      fontWeight: 'normal',
      fontFamily: 'Helvetica,"Helvetica Neue",Arial,sans-serif'
    },
    subtitle1: {
      fontSize: '12px',
      fontWeight: 'normal',
      fontFamily: 'Helvetica,"Helvetica Neue",Arial,sans-serif'
    }
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: '#FFFFFF',
        padding: '10px'
      }
    },
    MuiContainer: {
      root: {
        height: '100%'
      }
    }
  }
})

export default appTheme
