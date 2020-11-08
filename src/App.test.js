/* global test, expect, jest */

import React from 'react'
import { render, screen } from '@testing-library/react'
import App from './App'

jest.mock('./components/LookupForm', () => {
  return () => <div data-testid='LookupForm' />
})
jest.mock('./components/IpResult', () => {
  return () => <div data-testid='IpResult' />
})
jest.mock('./components/WhoisResult', () => {
  return () => <div data-testid='WhoisResult' />
})
jest.mock('./components/Loading', () => {
  return () => <div data-testid='Loading' />
})

test('renders app container', () => {
  render(<App />)
  expect(screen.getByTestId('app-container')).toBeTruthy()
})
