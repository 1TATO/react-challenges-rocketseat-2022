import styled from 'styled-components';

export const CoffeesWrapper = styled.div`
  margin-top: 2rem;

  h2 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
  }
`;

export const CoffeeList = styled.div`
  margin-top: 2.375rem;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;
`;
