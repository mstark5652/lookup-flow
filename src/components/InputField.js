import React from 'react'
import PropTypes from 'prop-types'

import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  textField: {
    margin: theme.spacing(1),
    minWidth: '320px'
  }
}))

const InputField = (props) => {
  const classes = useStyles()
  return (
    <TextField
      className={classes.textField}
      helperText={props.touched[props.name] ? props.errors[props.name] : (props.helperText || '')}
      error={props.touched[props.name] && !!props.errors[props.name]}
      {...props}
    />
  )
}

InputField.propTypes = {
  name: PropTypes.string,
  helperText: PropTypes.string,
  touched: PropTypes.object,
  errors: PropTypes.object,
  type: PropTypes.string,
  inputProps: PropTypes.object
}

export default InputField
