/**
 * Utils
 */

/**
 * Convert split seconds to time (hours:minutes:seconds)
 *
 *  @params {int} value - split seconds ( seconds / 10 )
 *  @returns {array<string>} [hours, minutes, seconds]
 */
export const splitSeconds2Time = (value) => {
  let date = new Date(null)
  date.setMilliseconds(value * 100)
  return date.toISOString().substr(11, 10).split(':')
}
