/**
 * Contains time component
 */
import React from 'react'
import { splitSeconds2Time } from '../common/utils'

const Badge = (props) => (
  <span className={ `mr-2 badge badge-${ props.badgeColor }` }>
    <span id={ props.id } className={ props.className }>
    { props.value }
    </span>
  </span>
)

/**
 * Time
 *
 *  @params {object} props - component properties
 *  @returns {JSX.Element}
 */
export const Time = (props) => {
  return splitSeconds2Time(props.split_seconds).map((value, index) => {
    const key = ["hours", "minutes", "seconds"][index]
    return (
      <Badge 
        key={ key }
        id={ `${ props.id }-${ key }` }
        className={ props.className }
        badgeColor={ props.color }
        value={ value }
      />
    )
  })
}
