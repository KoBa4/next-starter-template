import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
  it('renders correctly', () => {
    render(<Header />)
    const heading = screen.getByRole('heading', {
      name: /Header/i,
    })
    expect(heading).toBeInTheDocument()
  })

  it('Header snapshot', () => {
    const { container } = render(<Header />)
    expect(container).toMatchSnapshot()
  })
})
