/**
 * Contains business logic
 */
import React from 'react'
import ToolButtonsComponent from './component'

class ToolButtonsContainer extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      running: false
    }
  }

  render() {
    return (
      <ToolButtonsComponent
        toggleStarted={ () => this.setState({ running: !this.state.running }) }
        { ...this.state }
        { ...this.props }
      />
    )
  }
}

export default ToolButtonsContainer
