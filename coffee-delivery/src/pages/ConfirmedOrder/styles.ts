import styled from 'styled-components';

export const ConfirmedOrderContainer = styled.div`
  h1 {
    font-family: 'Baloo 2';
    color: ${(props) => props.theme['yellow-dark']};
    font-weight: 800;
    font-size: 2rem;
  }

  p {
    color: ${(props) => props.theme['base-subtitle']};
    font-size: 1.25rem;
    margin-top: 0.25rem;
  }
`;

export const ConfirmedOrderInfosContainer = styled.div`
  margin-top: 2.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30.75rem;
    height: 18rem;
  }
`;

export const ConfirmedOrderInfos = styled.div`
  padding: 2.5rem;
  min-width: 32.875rem;
  border-radius: 6px 36px 6px 36px;

  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 6px 36px 6px 36px;
    border: 1px solid transparent;
    background: linear-gradient(45deg, #dbac2c, #8047f8) border-box;
    -webkit-mask: linear-gradient(#fff 0 0) padding-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }

  > div {
    & + div {
      margin-top: 2rem;
    }
  }
`;
