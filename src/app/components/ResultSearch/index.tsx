import { SectionTitle } from '../../styles/SectionTitle';
import { DevCard } from '../DevCard';
import { ResultSearchContainer, ResultSearchList } from './styles';
import mockImage from '../../mockImage.png';
const teste = [1, 2, 3];
export const ResultSearch = () => {
  return (
    <ResultSearchContainer>
      <SectionTitle>Devs Encontrados</SectionTitle>
      <ResultSearchList>
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
      </ResultSearchList>
    </ResultSearchContainer>
  );
};
