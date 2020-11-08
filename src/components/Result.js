import React from 'react'
import PropTypes from 'prop-types'

const Result = ({ data }) => {
  return (
    <pre className='code'>
      {JSON.stringify(data, null, 2)}
    </pre>
  )
}

Result.propTypes = {
  data: PropTypes.object
}

export default Result
