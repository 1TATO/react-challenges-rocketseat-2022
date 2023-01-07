import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${(props) => props.theme['gray-100']};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      /* isso foi feito por causa da borda que tem embaixo quando tem o hover nos botoes */
      &:hover {
        border-bottom: 3px solid ${(props) => props.theme['green-500']};
      }

      /* faz com que o botao fique verde quando ta na pagina dele */
      &.active {
        color: ${(props) => props.theme['green-500']};
      }
    }
  }
`;
