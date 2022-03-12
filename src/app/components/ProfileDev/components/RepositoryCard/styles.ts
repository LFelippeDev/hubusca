import styled from 'styled-components';

export const RepositoryCardContainer = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 0.38rem 0.65rem -0.13rem rgba(0, 0, 0, 0.25);
  margin: 1rem;
  display: flex;
  flex-direction: column;
`;

export const RepositoryCardFooter = styled.footer`
  width: 100%;
  display: flex;
  gap: 2rem;
`;

export const RepositoryCardName = styled.b`
  font-weight: 500;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
  color: ${(props) => props.theme.colors.devInfosText};
`;

export const RepositoryCardInfos = styled.span`
  display: flex;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.2rem;
  color: ${(props) => props.theme.colors.devInfosText};
`;

export const RepositoryCardInfosLabel = styled.label`
  display: flex;
  font-size: 0.75rem;
  margin-bottom: 0.2rem;
  margin-right: 0.2rem;
  color: ${(props) => props.theme.colors.primary};
`;
