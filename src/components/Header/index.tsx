import { HeaderContainer } from './styles'
import logo from '../../assets/logo-ignite.svg'
import { Scroll, Timer } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />
      <nav>
        <NavLink to="/">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  )
}
