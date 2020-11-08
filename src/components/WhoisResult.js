import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  root: {
    overflowY: 'scroll',
    whiteSpace: 'pre-wrap',
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}))

const WhoisResult = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Typography variant='body1'>{data}</Typography>
    </div>
  )
}

WhoisResult.propTypes = {
  data: PropTypes.string
}

export default WhoisResult
