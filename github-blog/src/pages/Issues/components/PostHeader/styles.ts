import styled from 'styled-components';

export const PostHeaderContainer = styled.header`
  background: ${(props) => props.theme['base-profile']};
  height: 10.5rem;
  width: 100%;
  padding: 2rem;
  border-radius: 10px;
  margin-top: -5rem;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      color: ${(props) => props.theme['blue']};
      font-size: 0.75rem;

      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }
    }
  }

  h1 {
    margin-top: 1.25rem;
    color: ${(props) => props.theme['base-title']};
    font-size: 1.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: 0.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      svg {
        width: 1.125rem;
        height: 1.125rem;
        color: ${(props) => props.theme['base-label']};
      }
    }
  }
`;
