import styled from 'styled-components';

export const OrderItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  border-bottom: 1px solid ${(props) => props.theme['base-button']};
  padding-bottom: 1.5rem;

  > div {
    display: flex;
    align-items: center;
    gap: 1.25rem;

    img {
      height: 4rem;
      width: 4rem;
    }

    p {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  > p {
    font-weight: 700;
  }

  & + div {
    margin-top: 1.5rem;
  }
`;

export const ButtonsContainer = styled.div`
  margin-top: 0.5rem;
  gap: 0.5rem;

  display: grid;
  grid-template-columns: 4.5rem 1fr;
`;

export const RemoveItem = styled.button`
  background: ${(props) => props.theme['base-button']};
  border: none;
  padding: 0.5rem;
  border-radius: 6px;
  gap: 0.25rem;
  color: ${(props) => props.theme['base-text']};
  font-size: 0.75rem;
  cursor: pointer;

  display: flex;
  align-items: center;

  transition: background 0.2s;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`;
