import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { ThemeProvider } from '@material-ui/styles'

import LookupForm from './components/LookupForm'
import WhoisResult from './components/WhoisResult'
import IpResult from './components/IpResult'
import Loading from './components/Loading'

import theme from './common/theme'
import constants from './common/constants'
import { useFetch } from './hooks/useFetch'

import './App.css'

const App = () => {
  const [{ apiResult, isLoading, error }, , setUrl] = useFetch(null, {}, 'POST')

  const handleSubmit = ({ address }) => {
    if (constants.IP_REGEX.test(address)) {
      setUrl(`${constants.BASE_URL}?address=${encodeURI(address)}`)
    } else {
      setUrl(`${constants.BASE_URL}?domain=${encodeURI(address)}`)
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth='lg' data-testid='app-container'>
        <div className='flex-container'>
          <LookupForm handleSubmit={handleSubmit} />
          {error && <Typography variant='body1' className='error-message'>{error ? error.error : 'An error occurred.'}</Typography>}
          {!error && isLoading && <Loading />}
          {!error && !isLoading && apiResult && (apiResult.data ? <WhoisResult data={apiResult.data} /> : <IpResult data={apiResult} />)}
        </div>
      </Container>
    </ThemeProvider>
  )
}

export default App
