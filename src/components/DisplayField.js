import React from 'react'
import PropTypes from 'prop-types'

const pstyle = {
  fontWeight: 'normal'
}

const spanStyle = {
  fontWeight: 'bold'
}

const DisplayField = ({ label, value }) => {
  return (
    <p style={pstyle}>
      <span style={spanStyle}>{label}</span>
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
