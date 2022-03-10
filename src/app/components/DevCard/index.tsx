import { LocationIcon } from '../../styles/LocationIcon';
import {
  DevCardName,
  DevCardContainer,
  DevCardFooter,
  DevCardImage,
  DevCardInfos,
} from './styles';

interface IDevCardProps {
  name: string;
  login: string;
  image: string;
  location: string;
}

export const DevCard = ({ image, location, login, name }: IDevCardProps) => {
  return (
    <DevCardContainer>
      <DevCardImage src={image} alt="Foto do Dev" />
      <DevCardFooter>
        <DevCardName>{name}</DevCardName>
        <DevCardInfos>{login}</DevCardInfos>
        <DevCardInfos>
          <LocationIcon />
          {location}
        </DevCardInfos>
      </DevCardFooter>
    </DevCardContainer>
  );
};
