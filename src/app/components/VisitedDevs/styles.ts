import styled from 'styled-components';

export const VisitedDevsContainer = styled.aside`
  width: 20%;
  height: 90%;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) and(min-width: 820px) {
    width: 25%;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }
`;

export const VisitedDevsList = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1100px) {
    width: 100%;
    overflow-y: hidden;
    overflow-x: auto;
    flex-direction: row;
    align-items: center;
  }
`;
