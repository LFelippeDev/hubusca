import styled from 'styled-components';

interface IProfileDevNameOrIdProps {
  isId?: boolean;
}

interface IProfileDevNumberInfosProps {
  isBold?: boolean;
}

export const ProfileDevContainer = styled.main`
  width: 80%;
  display: flex;
  justify-content: space-evenly;
`;

export const ProfileDevBoxInfos = styled.div`
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  @media (max-width: 1100px) {
    width: 22%;
  }
`;

export const ProfileDevRepositoryList = styled.div`
  width: 70%;
  border-radius: 1rem;
  border: 0.1rem solid ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;

  @media (max-width: 1100px) {
    width: 67%;
  }
`;

export const ProfileDevImage = styled.img`
  width: 12.5rem;
  height: 12.5rem;
  object-fit: cover;
  margin-bottom: 1.5rem;
  border-radius: 50%;
  border: 0.15rem solid ${(props) => props.theme.colors.primary};

  @media (max-width: 1100px) {
    width: 10.5rem;
    height: 10.5rem;
  }
`;

export const ProfileDevNameOrId = styled.b<IProfileDevNameOrIdProps>`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.3rem 0;
  color: ${(props) =>
    props.isId ? props.theme.colors.primary : props.theme.colors.sectionTitle};
`;

export const ProfileDevInfos = styled.text<IProfileDevNumberInfosProps>`
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
`;

export const ProfileDevNumberInfos = styled.text`
  font-size: 1rem;
  color: ${(props) => props.theme.colors.primary};
  margin-right: 0.25rem;
`;
