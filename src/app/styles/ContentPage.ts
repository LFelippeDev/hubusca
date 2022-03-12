import styled from 'styled-components';

export const ContentPage = styled.div`
  overflow: hidden;
  height: 92vh;
  display: flex;
  justify-content: center;

  @media (max-width: 820px) {
    height: 100%;
  }
`;

export const MaxWidthContainer = styled.div`
  width: 100vw;
  height: 100%;
  max-width: 1300px;
  padding: 2.5rem 0;
  display: flex;
  align-items: flex-start;

  @media (max-width: 1100px) {
    display: flex;
    flex-direction: column;
    overflow: auto;
    padding: 0.5rem 0;
  }
`;
