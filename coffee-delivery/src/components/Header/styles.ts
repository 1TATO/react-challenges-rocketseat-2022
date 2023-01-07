import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  z-index: 1;
  background: ${(props) => props.theme.background};

  > div {
    height: 6.5rem;
    width: 100%;
    padding: 2rem 0;

    display: flex;
    justify-content: space-between;
  }
`;

export const CartContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  line-height: 0;

  p {
    display: flex;
    align-items: center;

    font-size: 0.875rem;
    background: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme['purple-dark']};
    width: 9rem;
    padding: 0.5rem;
    border-radius: 8px;
    gap: 0.25rem;
  }

  a {
    background: ${(props) => props.theme['yellow-light']};
    width: 2.375rem;
    padding: 0.5rem;
    border-radius: 8px;

    position: relative;

    span {
      position: absolute;
      background: ${(props) => props.theme['yellow-dark']};
      color: ${(props) => props.theme.white};
      font-weight: 700;
      font-size: 0.75rem;
      height: 1.25rem;
      width: 1.25rem;
      border-radius: 50%;
      padding: 0.5rem;
      top: -8px;
      right: -8px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;
