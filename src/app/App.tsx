import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import { Header } from './components/Header';
import { ProfileDev } from './components/ProfileDev';
import { VisitedDevs } from './components/VisitedDevs';
import { IDevProps } from './interfaces/DevProps';
import { ContentPage, MaxWidthContainer } from './styles/ContentPage';
import { SeparationLine } from './styles/SeparatioLine';
import { searchDev } from '../api/api';
import { useLastVisitedDevs } from './hooks/useLastVisitedDevs';

export const App = () => {
  const [selectedDev, setSelectedDev] = useState<IDevProps | undefined>();
  const [devOnSearchBar, setDevOpen] = useState<string>('');
  const [error, setError] = useState<string>('Procure um dev');

  const lastVisitedDevs = useLastVisitedDevs();

  useEffect(() => {
    const formatedDev = searchDev(devOnSearchBar);
    formatedDev.then((value) => {
      if (typeof value === 'string') {
        setError(value);
        return;
      }
      setSelectedDev(value);
    });
  }, [devOnSearchBar]);

  return (
    <ThemeProvider theme={theme}>
      <Header searchDevs={setDevOpen} />
      <ContentPage>
        <MaxWidthContainer>
          {selectedDev && <ProfileDev selectedDev={selectedDev} />}
          <SeparationLine />
          <VisitedDevs
            lastVisitedDevs={lastVisitedDevs}
            openVisitedDev={setDevOpen}
          />
        </MaxWidthContainer>
      </ContentPage>
    </ThemeProvider>
  );
};
