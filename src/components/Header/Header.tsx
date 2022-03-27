import { NextPage } from 'next'
import { HeaderBlock } from './Header.style'

const Header: NextPage = () => (
  <HeaderBlock data-testid="Header">
    <h1>Header</h1>
  </HeaderBlock>
)

export default Header
