import React from 'react'
import ToolButtons from '../toolbuttons'
import Counter from '../counter'
import TimeStamps from '../timestamps'

/**
 * Main component at app
 */
const MainComponent = (props) => {
  return [
    <Counter key="counter" split_seconds={ props.split_seconds } />,
    <ToolButtons key="buttons" { ...props } />,
    <TimeStamps key="stamp" timestamps={ props.timestamps } /> 
  ]
}

export default MainComponent
