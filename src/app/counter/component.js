import React from 'react'
import { Time } from '../common/time'

/**
 * Render counter
 */
const CounterComponent = (props) => {
  return (
    <div className="row justify-content-center mt-5 mb-2">
      <div className="col-auto">
        <Time id="counter" { ...props } className="h2" color="info" />
      </div>
    </div>
  )
}

export default CounterComponent
