import styled from 'styled-components';
import sadFace from '../assets/sadFace.svg';

const WithoutInformationContainer = styled.div`
  flex: 1;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  height: 100%;
  opacity: 0.75;

  img {
    width: 15%;
  }

  span {
    color: ${(props) => props.theme.colors.primary};
    font-weight: 500;
    font-size: 1rem;
  }
`;

interface IWithoutInformationProps {
  infoMessage: string;
}

export const WithoutInformation = ({
  infoMessage,
}: IWithoutInformationProps) => {
  return (
    <WithoutInformationContainer>
      <img src={sadFace} alt="Rosto Triste" />
      <span>{infoMessage}</span>
    </WithoutInformationContainer>
  );
};
