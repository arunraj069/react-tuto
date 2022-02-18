import React from 'react'

function SeasonDisplay(props) {
  return (
    <div>
    { (props.obj.lat) ? `Latitude : ${props.obj.lat}`: props.obj.errorMessage}
    </div>
  )
}

export default SeasonDisplay;
