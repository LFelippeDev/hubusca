import styled from 'styled-components';

interface IProfileDevNameOrIdProps {
  isId?: boolean;
}

interface IProfileDevNumberInfosProps {
  isBold?: boolean;
}

export const ProfileDevContainer = styled.main`
  width: 80%;
  height: 90%;
  display: flex;
  justify-content: space-evenly;

  @media (max-width: 820px) {
    flex-direction: column;
    width: 100vw;
    height: 100%;
  }
`;

export const ProfileDevBoxInfos = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 1100px) and (min-width: 820px) {
    width: 22%;
  }

  @media (max-width: 820px) {
    width: 100%;
    align-items: center;
    padding: 0;
  }
`;

export const ProfileDevRepositoryList = styled.div`
  width: 90%;
  overflow: auto;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) and (min-width: 820px) {
    width: 67%;
  }

  @media (max-width: 820px) {
    width: 90%;
    margin: 1rem;
  }
`;

export const ProfileDevImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  border: 0.15rem solid ${(props) => props.theme.colors.primary};

  @media (max-width: 1100px) and (min-width: 820px) {
    width: 10.5rem;
    height: 10.5rem;
  }

  @media (max-width: 820px) {
    margin-bottom: 0.5rem;
  }
`;

export const ProfileDevNameOrId = styled.b<IProfileDevNameOrIdProps>`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.3rem 0;
  color: ${(props) =>
    props.isId ? props.theme.colors.primary : props.theme.colors.sectionTitle};
`;

export const ProfileDevInfos = styled.span<IProfileDevNumberInfosProps>`
  font-size: 0.875rem;
  font-weight: ${(props) => (props.isBold ? 500 : 400)};
  margin-bottom: 0.3rem;
  color: ${(props) => props.theme.colors.devInfosText};
  display: flex;
  align-items: flex-end;
`;

export const ProfileDevStatusInfos = styled.div`
  padding: 1rem 0;
  display: flex;
  flex-direction: column;

  @media (max-width: 820px) {
    padding: 0.5rem 0;
    flex-direction: row;
    gap: 1rem;
  }
`;

export const ProfileDevNumberInfos = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.25rem;
`;
