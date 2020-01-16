/**
 * Contains business logic for counter component
 */
import React from 'react'
import CounterComponent from './component'

class CounterContainer extends React.Component {
  render() {
    return <CounterComponent { ...this.props } />
  }
}

export default CounterContainer
