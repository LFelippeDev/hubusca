import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import { Header } from './components/Header';
import { ProfileDev } from './components/ProfileDev';
import { ResultSearch } from './components/ResultSearch';
import { VisitedDevs } from './components/VisitedDevs';
import { IDevProps } from './interfaces/DevProps';
import { ContentPage, MaxWidthContainer } from './styles/ContentPage';
import { SeparationLine } from './styles/SeparatioLine';
import mockImage from './mockImage.png';

const InitialStateDev: IDevProps = {
  id: 'dsasdasd',
  image: mockImage,
  name: 'Felippe Fernandes',
  login: 'LFelippeDev',
  location: 'Brasil',
  followers: 0,
  totalPublicRepositories: 11,
  publicRepositories: [
    {
      createdAt: '12/12/2021',
      language: 'TypeScript',
      lastPush: '12/12/2021',
      name: 'Api de Teste',
    },
    {
      createdAt: '12/12/2021',
      language: 'TypeScript',
      lastPush: '12/12/2021',
      name: 'Api de Teste',
    },
    {
      createdAt: '12/12/2021',
      language: 'TypeScript',
      lastPush: '12/12/2021',
      name: 'Api de Teste',
    },
    {
      createdAt: '12/12/2021',
      language: 'TypeScript',
      lastPush: '12/12/2021',
      name: 'Api de Teste',
    },
    {
      createdAt: '12/12/2021',
      language: 'TypeScript',
      lastPush: '12/12/2021',
      name: 'Api de Teste',
    },
  ],
};

export const App = () => {
  const [selectedDev, setSelectedDev] = useState<IDevProps | undefined>(
    InitialStateDev
  );

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <ContentPage>
        <MaxWidthContainer>
          {selectedDev ? (
            <ProfileDev selectedDev={selectedDev} />
          ) : (
            <ResultSearch />
          )}
          <SeparationLine />
          <VisitedDevs />
        </MaxWidthContainer>
      </ContentPage>
    </ThemeProvider>
  );
};
