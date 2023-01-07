import styled from 'styled-components';

import backgroundImage from '../../assets/backgroundImage.png';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const HomeBanner = styled.div`
  background-image: ${() => `url(${backgroundImage})`};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  height: 34rem;

  display: flex;
  align-items: center;

  margin-top: 2rem;
  padding: 0 2rem;
`;

export const HomeContent = styled.div`
  width: 100%;
  max-width: 70rem;
  margin: 0 auto;

  display: flex;
  justify-content: space-between;

  h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-subtitle']};
    margin-top: 1rem;
  }
`;

export const HomeDetails = styled.div`
  max-width: 37.5rem;
`;

export const BenefitsItems = styled.div`
  margin-top: 4.125rem;

  display: grid;
  grid-template-columns: 1fr 1fr;

  > div {
    margin-bottom: 1.25rem;
  }
`;
