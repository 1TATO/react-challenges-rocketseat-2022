import { HeaderContainer } from './styles';

import logoImg from '../../assets/logoImg.svg';

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoImg} alt="" />
    </HeaderContainer>
  );
}
