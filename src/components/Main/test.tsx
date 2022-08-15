import { render, screen } from '@testing-library/react'
import Main from './index'

describe('<Main />', () => {
  it('should render the h1 element', () => {
    const { container } = render(<Main />)

    expect(
      screen.getByRole('heading', {
        name: /react avancado/i
      })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
