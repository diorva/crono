/**
 * 
 */
import React from 'react'
import MainComponent from './component'


class MainContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      split_seconds: 0,
      interval: null,
      timestamps: []
    }

    // Function Binds
    this.handlePlayPauseTimerEvent = this.handlePlayPauseTimerEvent.bind(this) 
    this.handleResetTimerEvent = this.handleResetTimerEvent.bind(this)
    this.handleTimestampTimerEvent = this.handleTimestampTimerEvent.bind(this)
    this.handlerTimerEvents = this.handlerTimerEvents.bind(this)
  }

  /**
   * Allow to control event to start or pause timer
   */
  handlePlayPauseTimerEvent() {
    if ( this.state.interval === null ) {
      // Start
      const interval = setInterval(
        () => this.setState({ split_seconds: this.state.split_seconds + 1 }),
        100
      )
      this.setState({ interval })
    } else {
      // Pause
      clearInterval(this.state.interval)
      this.setState({ interval: null })
    }
  }

  /**
   * Allow to control event to reset timer
   */
  handleResetTimerEvent() {
    this.setState({ split_seconds: 0, interval: null, timestamps: [] })
  }

  /**
   * Allow to control event to stamp timer
   */
  handleTimestampTimerEvent() {
    const timestamps = [ this.state.split_seconds, ...this.state.timestamps]
    this.setState({ timestamps })
  }

  /**
   * Handler Timer Events
   */
  handlerTimerEvents(name) {
      let handler = {
        'playpause': this.handlePlayPauseTimerEvent,
        'reset': this.handleResetTimerEvent,
        'stamp': this.handleTimestampTimerEvent
      }[name]
      
      handler()
  }

  render() {
    return (
      <MainComponent 
        handlerTimerEvents={ this.handlerTimerEvents }
        { ...this.state } 
      />
    )
  }
}

export default MainContainer
