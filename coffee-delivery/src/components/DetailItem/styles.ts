import styled from 'styled-components';

export const DetailItemContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    p {
      color: ${(props) => props.theme['base-text']};
      font-size: 1rem;
    }
  }
`;

const BACKGROUND_COLORS = {
  yellow: 'yellow',
  yellowDark: 'yellow-dark',
  purple: 'purple',
  baseText: 'base-text',
} as const;

interface IconContainerProps {
  backgroundColor: keyof typeof BACKGROUND_COLORS;
}

export const IconContainer = styled.div<IconContainerProps>`
  background: ${(props) =>
    props.theme[BACKGROUND_COLORS[props.backgroundColor]]};
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  padding: 0.5rem;
`;
