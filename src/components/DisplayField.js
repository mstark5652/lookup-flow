import React from 'react'
import PropTypes from 'prop-types'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  root: {
    fontWeight: 'normal'
  },
  label: {
    fontWeight: 'bold'
  }
})

const DisplayField = ({ label, value }) => {
  const classes = useStyles()
  return (
    <p className={classes.root}>
      <span className={classes.label}>{label}</span>
      <br />
      {value}
    </p>
  )
}

DisplayField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default DisplayField
