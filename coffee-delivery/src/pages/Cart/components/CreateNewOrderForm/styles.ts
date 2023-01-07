import styled from 'styled-components';
import { CardBackground } from '../../styles';

export const OrderAddressAndPaymentContainer = styled.div`
  width: 40rem;

  h2 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.125rem;
    font-weight: 700;
  }
`;

export const AddressContainer = styled(CardBackground)``;

export const TitleContainer = styled.div`
  display: flex;

  > div {
    margin-left: 0.5rem;

    > p {
      color: ${(props) => props.theme['base-subtitle']};

      & + p {
        color: ${(props) => props.theme['base-text']};
        font-size: 0.875rem;
      }
    }
  }
`;

export const AddressInformation = styled.div`
  margin-top: 2rem;
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  .cep {
    grid-column: span 3;
    max-width: 12.5rem;
  }

  .street {
    grid-column: span 3;
  }

  .complement {
    grid-column: span 2;
  }
`;

export const OrderInput = styled.input`
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
`;

export const PaymentContainer = styled(CardBackground)`
  margin-top: 0.75rem;
`;
