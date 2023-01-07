import styled from 'styled-components';

export const PostContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2.5rem 2rem;
  margin-bottom: 8rem;

  img {
    width: 100%;
  }

  ul {
    padding-left: 1.5rem;
  }

  h1,
  h2,
  h3 {
    color: ${(props) => props.theme.blue};
  }
`;
