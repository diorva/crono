import React, { useState } from 'react'
import { Button } from '../common/buttons'

/**
 * Start/Pause Button
 *
 *  @params {object} props - component properties
 *  @returns {JSX.Element}
 */
const PlayPauseButton = (props) => {
  // Estado local para controla el icono renderizado
  const [visiblePlay, setVisiblePlay] = useState(true)
  return (
    <Button 
      id="play"
      onClick={ (ev) => {
        setVisiblePlay(! visiblePlay) 
        if ( props.onClick ) props.onClick(ev)
      }}
    >
      <i className={ `fas fa-${ visiblePlay ? 'play' : 'pause' }` }></i>
    </Button>
  )
}

/**
 * Reset button
 *
 *  @params {object} props - component properties
 *  @returns {JSX.Element}
 */
const ResetButton = (props) => {
  let className = "btn-warning"
  if ( props.running || ( ! props.running && props.split_seconds === 0 ) ) {
    className += " invisible"
  }

  return (
    <Button id="reset" className={ className } onClick={ props.onClick }>
      <i className="fas fa-undo"></i>
    </Button>
  )
}

/**
 * Time stamp button
 *
 *  @params {object} props - component properties
 *  @returns {JSX.Element} 
 */
const TimestampButton = (props) => {
  let className = "btn-dark"
  if ( ! props.running ) {
    className += " invisible"
  }

  return (
    <Button id="timestamp" className={ className } onClick={ props.onClick }>
      <i className="fas fa-stopwatch"></i>
    </Button>
  )
}

/**
 * This components contains navigations tool buttons
 *
 *  @params {object} props - component properties
 *  @returns {JSX.Element} 
 */
const ToolButtonsComponent = (props) => {
  return (
    <div className="row justify-content-center p-2">
      <div className="col-auto">
        <ResetButton 
          onClick={ () => props.handlerTimerEvents('reset') }
          { ...props } 
        />
      </div>
      <div className="col-auto">
        <PlayPauseButton
          onClick={ () => {
            props.toggleStarted()
            props.handlerTimerEvents('playpause')
          }}
        />
      </div>
      <div className="col-auto">
        <TimestampButton
          running={ props.running }
          onClick={ () => props.handlerTimerEvents('stamp') }
        />
      </div>
    </div>
  )
}

export default ToolButtonsComponent
