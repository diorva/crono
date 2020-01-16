/**
 * Contains common-purpose components
 */
import React from 'react'

/**
 * Dark Button
 *
 *  @params {object} props - component properties
 *  @returns {JSX.Element}
 */
export const Button = (props) => (
  <button 
    id={ props.id }
    type="button" 
    className={ `btn ${ props.className ? props.className : 'btn-primary' }` }
    onClick={ props.onClick }
  >
    { props.children }
  </button>
)
