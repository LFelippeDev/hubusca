import { SectionTitle } from '../../styles/SectionTitle';
import { DevCard } from '../DevCard';
import { VisitedDevsContainer } from './styles';
import mockImage from '../../mockImage.png';
const teste = [1, 2];
export const VisitedDevs = () => {
  return (
    <VisitedDevsContainer>
      <SectionTitle>Devs Visitados</SectionTitle>
      {teste.map((dev) => {
        return (
          <DevCard
            key={dev}
            image={mockImage}
            name="Felippe Fernandes"
            location="Brasil"
            login="LFelippeDev"
          />
        );
      })}
    </VisitedDevsContainer>
  );
};
