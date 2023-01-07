import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const PostContainer = styled(Link)`
  height: 16.25rem;
  width: 26rem;
  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
  padding: 2rem;
  border: 2px solid ${(props) => props.theme['base-post']};
  transition: 0.4s;

  display: flex;
  flex-direction: column;

  &:hover {
    border-color: ${(props) => props.theme['base-label']};
  }

  header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 1rem;

    h2 {
      max-width: 17rem;
      font-size: 1.25rem;
      color: ${(props) => props.theme['base-title']};
    }

    span {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-span']};
    }
  }

  p {
    margin-top: 1.25rem;
    line-height: 25.6px;
    color: ${(props) => props.theme['base-text']};

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 4;
  }
`;
