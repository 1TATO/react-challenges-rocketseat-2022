import styled from 'styled-components';
import headerBackground from '../../assets/headerBackground.png';

export const HeaderContainer = styled.header`
  width: 100%;
  height: 18.5rem;
  background: url(${headerBackground}) no-repeat center;
  background-size: cover;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    margin-bottom: 4rem;
  }
`;