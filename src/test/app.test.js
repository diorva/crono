import React from 'react'
import ReactDOM from 'react-dom'
import { act } from 'react-dom/test-utils'
import ReactTestUtils from 'react-dom/test-utils'
import Crono from '../app'

function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

let container

beforeEach(() => {
  container = document.createElement('div')
  document.body.appendChild(container)
})

afterEach(() => {
  document.body.removeChild(container)
  container = null
})

it('can render and verify start/reset timer events', async () => {
  act(() => {
    ReactDOM.render(<Crono />, container)
  })

  // Test state initial
  const hours = container.querySelector('span#counter-hours')
  expect(hours.textContent).toBe('00')
  const minutes = container.querySelector('span#counter-minutes')
  expect(minutes.textContent).toBe('00')
  const seconds = container.querySelector('span#counter-seconds')
  expect(seconds.textContent).toBe('00.0')

  // Test events
  const playButton = container.querySelector('button#play')

  ReactTestUtils.Simulate.click(playButton)
  await timeout(400)
  ReactTestUtils.Simulate.click(playButton)
  await timeout(400)
  expect(seconds.textContent).not.toBe('00.0')
  const resetButton = container.querySelector('button#reset')
  ReactTestUtils.Simulate.click(resetButton)
  await timeout(100)
  expect(seconds.textContent).toBe('00.0')
})
