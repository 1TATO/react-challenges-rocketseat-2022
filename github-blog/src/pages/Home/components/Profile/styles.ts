import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: ${(props) => props.theme['base-profile']};
  color: ${(props) => props.theme['base-text']};
  padding: 2rem 2rem 2rem 2.5rem;
  border-radius: 10px;
  margin-top: -5rem;

  display: flex;

  > img {
    height: 9.25rem;
    width: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileDescription = styled.div`
  margin-left: 2rem;
  flex: 1;
  display: flex;
  flex-direction: column;

  > header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    color: ${(props) => props.theme['base-title']};

    a {
      color: ${(props) => props.theme['blue']};
      font-size: 0.75rem;

      border-top: 1px solid transparent;
      border-bottom: 1px solid transparent;

      &:hover {
        border-bottom: 1px solid ${(props) => props.theme.blue};
      }

      svg {
        margin-left: 0.5rem;
      }
    }
  }

  p {
    margin-top: 0.5rem;
  }

  ul {
    display: flex;
    align-items: center;
    gap: 1.5rem;
    margin-top: auto;

    li {
      margin-top: auto;

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
