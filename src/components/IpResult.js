import React from 'react'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/core/styles'
import DisplayField from './DisplayField'

const useStyles = makeStyles(theme => ({
  root: {
    overflowY: 'scroll',
    width: '100%',
    margin: theme.spacing(1),
    padding: theme.spacing(1)
  }
}))

const IpResult = ({ data }) => {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <DisplayField label='IP Address' value={data.ip} />
      <DisplayField label='IP Type' value={data.type} />
      <DisplayField label='Continent' value={`${data.continent_name} (${data.continent_code})`} />
      <DisplayField label='Country' value={`${data.country_name} (${data.country_code}) ${data.location.country_flag_emoji}`} />
      <DisplayField label='Region' value={`${data.region_name} (${data.region_code})`} />
      <DisplayField label='City' value={data.city} />
      <DisplayField label='Zip' value={data.zip} />
      <DisplayField label='Latitude' value={data.latitude} />
      <DisplayField label='Longitude' value={data.longitude} />
      <DisplayField label='City' value={data.city} />
    </div>
  )
}

IpResult.propTypes = {
  data: PropTypes.object
}

export default IpResult
