/* global test, expect, jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('./components/LookupForm', () => {
  return () => <div data-testid='LookupForm' />
})
jest.mock('./components/Result', () => {
  return () => <div data-testid='Result' />
})
jest.mock('./components/Loading', () => {
  return () => <div data-testid='Loading' />
})

test('renders app container', () => {
  render(<App />)
  expect(screen.getByTestId('app-container')).toBeTruthy()
})
