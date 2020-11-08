import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

import InputField from './InputField'

const useStyles = makeStyles(theme => ({
  form: {
    textAlign: 'center',
    '& .MuiFormControl-root': {
      margin: theme.spacing(4)
    }
  }
}))

const LookupForm = ({ handleSubmit }) => {
  const classes = useStyles()
  const [address, setAddress] = useState()
  return (
    <form className={classes.form}>
      <div className='.MuiFormControl-root'>
        <Typography variant='h1'>Want to look up information on an IP address or domain name?</Typography>
        <Typography variant='h2'>Enter below:</Typography>
      </div>
      <InputField
        label='ip address/domain name'
        name='ipaddress'
        type='text'
        inputProps={{
          autoComplete: 'off'
        }}
        touched={{}}
        errors={{}}
        onChange={e => setAddress(e.target.value)}
      />
      <div>
        <Button
          color='primary'
          variant='contained'
          onClick={() => handleSubmit({ address })}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

LookupForm.propTypes = {
  handleSubmit: PropTypes.func
}

export default LookupForm
