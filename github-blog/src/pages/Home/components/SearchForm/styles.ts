import styled from 'styled-components';

export const SearchBarContainer = styled.form`
  margin-top: 0.75rem;

  input {
    height: 3.125rem;
    width: 100%;
    border-radius: 6px;
    padding: 0.75rem 1rem;
    border: none;
    border: 1px solid ${(props) => props.theme['base-label']};
    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-label']};

    &::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`;
