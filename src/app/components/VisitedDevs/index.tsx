import { SectionTitle } from '../../styles/SectionTitle';
import { DevCard, IDevCardProps } from '../DevCard';
import { VisitedDevsContainer } from './styles';

interface IVisitedDevsProps {
  lastVisitedDevs: IDevCardProps[];
  openVisitedDev: React.Dispatch<React.SetStateAction<string>>;
}

export const VisitedDevs = ({
  lastVisitedDevs,
  openVisitedDev,
}: IVisitedDevsProps) => {
  return (
    <VisitedDevsContainer>
      <SectionTitle>Devs Visitados</SectionTitle>
      {lastVisitedDevs.map((dev, index) => {
        return (
          <DevCard
            onClick={() => openVisitedDev(dev.login)}
            key={index}
            image={dev.image}
            name={dev.name}
            location={dev.location}
            login={dev.login}
          />
        );
      })}
    </VisitedDevsContainer>
  );
};
