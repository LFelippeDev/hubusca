import styled from 'styled-components';
import locationIcon from '../assets/locationIcon.svg';

const LocationIconContainer = styled.img`
  width: 0.7rem;
  height: 100%;
  margin-right: 0.2rem;
`;

export const LocationIcon = () => {
  return <LocationIconContainer src={locationIcon} alt="Localização do Dev" />;
};
