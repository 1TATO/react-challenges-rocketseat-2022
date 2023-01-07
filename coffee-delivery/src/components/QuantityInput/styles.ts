import styled from 'styled-components';

export const InputContainer = styled.div`
  height: 2.375rem;
  padding: 0.5rem;

  flex: 1;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 0.875rem;
    height: 0.875rem;

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }

    &:disabled {
      opacity: 0.2;
      cursor: not-allowed;
    }
  }

  svg {
    color: ${(props) => props.theme.purple};
  }

  input {
    height: 100%;
    width: 100%;
    border: none;
    color: ${(props) => props.theme['base-title']};

    text-align: center;
    background: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }
`;
