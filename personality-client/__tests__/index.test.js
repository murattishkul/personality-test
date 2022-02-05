import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Button', () => {
  it('renders a button', () => {
    render(<Home />)

    const button = screen.getByRole('button', {
      name: /start/i,
    })

    expect(button).toBeInTheDocument()
  })
})