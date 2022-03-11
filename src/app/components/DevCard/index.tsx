import { LocationIcon } from '../../styles/LocationIcon';
import {
  DevCardName,
  DevCardContainer,
  DevCardFooter,
  DevCardImage,
  DevCardInfos,
} from './styles';

export interface IDevCardProps {
  name: string;
  login: string;
  image: string;
  location: string;
}

interface IDevCardComponentProps extends Omit<IDevCardProps, ''> {
  onClick: () => void;
}

export const DevCard = ({
  image,
  location,
  login,
  name,
  onClick,
}: IDevCardComponentProps) => {
  return (
    <DevCardContainer onClick={onClick}>
      <DevCardImage src={image} alt="Foto do Dev" />
      <DevCardFooter>
        <DevCardName>{name}</DevCardName>
        <DevCardInfos>{login}</DevCardInfos>
        <DevCardInfos>
          {location && <LocationIcon />}
          {location}
        </DevCardInfos>
      </DevCardFooter>
    </DevCardContainer>
  );
};
