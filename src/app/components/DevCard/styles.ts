import styled from 'styled-components';

export const DevCardContainer = styled.div`
  border-radius: 1rem;
  box-shadow: 0 0.38rem 0.65rem -0.13rem rgba(0, 0, 0, 0.25);
  width: 12.37rem;
  height: 13.3rem;
  margin: 1rem;
  display: flex;
  flex-direction: column;

  :hover {
    cursor: pointer;
  }
`;

export const DevCardImage = styled.img`
  height: 9.25rem;
`;

export const DevCardFooter = styled.footer`
  width: 100%;
  padding: 0.5rem 1rem;
  display: flex;
  flex-direction: column;
`;

export const DevCardName = styled.b`
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`;

export const DevCardInfos = styled.text`
  display: flex;
  font-size: 0.75rem;
  margin-bottom: 0.2rem;
`;
