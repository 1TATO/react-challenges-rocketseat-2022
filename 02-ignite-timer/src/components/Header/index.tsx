import { NavLink } from 'react-router-dom';

import { HeaderContainer } from './styles';
import { Timer, Scroll } from 'phosphor-react';

import logo from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="" />

      <nav>
        <NavLink to="/" title="Timer" end>
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </nav>
    </HeaderContainer>
  );
}