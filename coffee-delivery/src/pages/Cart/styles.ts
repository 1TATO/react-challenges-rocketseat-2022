import styled from 'styled-components';

export const CompleteOrderForm = styled.form`
  display: flex;
  gap: 2rem;
`;

export const Input = styled.input`
  border: 0;
  background: ${(props) => props.theme['base-button']};
  padding: 0.75rem;
  border-radius: 6px;
  height: 2.62rem;
  font-size: 0.875rem;
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    outline: 2px solid ${(props) => props.theme['yellow-dark']};
  }
`;

export const CardBackground = styled.div`
  background: ${(props) => props.theme['base-card']};
  padding: 2.5rem;
  margin-top: 1rem;
  border-radius: 6px;
`;

export const OrderItemsContainer = styled.div`
  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const OrderItems = styled(CardBackground)`
  width: 28rem;
  border-top-right-radius: 2.75rem;
  border-bottom-left-radius: 2.75rem;
`;

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: ${(props) => props.theme['base-text']};

  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 0.75rem;
    }
  }

  .totalOrder {
    p {
      font-weight: bold;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  button {
    margin-top: 1.5rem;
    height: 2.875rem;
    width: 100%;
    border: none;
    background: ${(props) => props.theme['yellow']};
    font-size: 0.875rem;
    font-weight: 700;
    cursor: pointer;
    border-radius: 6px;
    color: ${(props) => props.theme['white']};

    transition: background 0.2s;

    &:hover {
      background: ${(props) => props.theme['yellow-dark']};
    }
  }
`;
