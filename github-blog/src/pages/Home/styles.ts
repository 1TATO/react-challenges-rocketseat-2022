import styled from 'styled-components';

export const PublishedPosts = styled.div`
  margin-top: 4.5rem;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }
`;

export const Postslist = styled.section`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
`;
