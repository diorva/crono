import React from 'react'
import { Time } from '../common/time'

/**
 * Render list of timestamps
 */
const TimeStampComponent = (props) => {
  if ( props.timestamps.length === 0 ) return null
  
  const elements = props.timestamps.map((split_seconds, index) => (
    <li key={ split_seconds } className="list-group-item">
      <Time id={ `timestamp-${ index }` } className="h4" split_seconds={ split_seconds} color="dark" />
    </li>
  ))

  return (
    <div className="row justify-content-center p-2">
      <div className="col-auto">
        <ul className="list-group">
          { elements }
        </ul>
      </div>
    </div>
  )
}

export default TimeStampComponent

