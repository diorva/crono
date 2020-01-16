import React from 'react'
import { render } from '@testing-library/react'
import { Button } from '../app/common/buttons'

test('render button', () => {
  const { getByText } = render(<Button>Play</Button>)
  const buttonElement = getByText(/Play/i)
  expect(buttonElement).toBeInTheDocument()
})
