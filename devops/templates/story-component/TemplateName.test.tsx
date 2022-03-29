import { render, screen } from '@testing-library/react'
import TemplateName from './TemplateName'

describe('TemplateName component', () => {
  it('renders correctly', () => {
    render(<TemplateName />)
    const heading = screen.getByRole('heading', {
      name: /TemplateName component/i,
    })
    expect(heading).toBeInTheDocument()
  })
})
