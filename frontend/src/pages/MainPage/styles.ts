import styled from 'styled-components';

export const MainWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: 0 auto;
  max-width: 60%;

  @media (max-width: 768px) {
    max-width: 90%;
  }
`;
