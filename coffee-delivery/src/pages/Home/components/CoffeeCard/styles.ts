import styled from 'styled-components';

export const CoffeCardContainer = styled.div`
  height: 20rem;
  width: 16rem;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  background: ${(props) => props.theme['base-card']};
  border-top-left-radius: 6px;
  border-top-right-radius: 36px;
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 36px;

  img {
    width: 7.5rem;
    height: 7.5rem;
    margin-top: -4rem;
  }
`;

export const Tags = styled.div`
  margin-top: 0.75rem;
  font-size: 0.625rem;
  font-weight: 700;
  line-height: 1.3;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;

  span {
    background: ${(props) => props.theme['yellow-light']};
    color: ${(props) => props.theme['yellow-dark']};
    padding: 0.25rem 0.5rem;
    border-radius: 100px;
    text-transform: uppercase;
  }
`;

export const CoffeeDescription = styled.div`
  margin-top: 1rem;
  width: 14rem;

  text-align: center;

  h3 {
    font-family: 'Baloo 2';
    font-weight: 700;
    font-size: 1.25;
    line-height: 1.3;
  }

  p {
    margin-top: 0.5rem;
    font-size: 0.875rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-label']};
  }
`;

export const Footer = styled.div`
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  min-width: 13rem;
  height: 2.375rem;

  div {
    display: flex;
    align-items: center;

    p {
      font-size: 1.5rem;
      font-family: 'Baloo 2';
      font-weight: 800;
    }

    p::before {
      content: 'R$ ';
      font-family: 'Roboto';
      font-size: 0.875rem;
      font-weight: 400;
    }
  }
`;

export const QuantityAndCart = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  width: 7.5rem;

  > button {
    border: 0;
    height: 2.375rem;
    width: 2.375rem;
    padding: 0.5rem;
    border-radius: 8px;
    background: ${(props) => props.theme['purple-dark']};
    cursor: pointer;

    display: flex;
    align-items: center;
    justify-content: center;

    transition: background-color 0.2s;

    &:hover {
      background: ${(props) => props.theme.purple};
    }
  }
`;
