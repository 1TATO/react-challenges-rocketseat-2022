import { NavLink } from 'react-router-dom';
import { ShoppingCart, MapPin } from 'phosphor-react';

import { HeaderContainer, CartContainer } from './styles';

import logoImg from '../../assets/logoImg.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

export function Header() {
  const { cartItems } = useContext(CartContext);

  return (
    <HeaderContainer>
      <div className="container">
        <NavLink to="/">
          <img src={logoImg} alt="" />
        </NavLink>

        <CartContainer>
          <p>
            <MapPin size={20} weight="fill" color="#8047F8" />
            Porto Alegre, RS
          </p>
          <NavLink to="/cart" title="Cart">
            <ShoppingCart size={22} weight="fill" color="#C47F17" />
            {cartItems.length >= 1 && <span>{cartItems.length}</span>}
          </NavLink>
        </CartContainer>
      </div>
    </HeaderContainer>
  );
}
