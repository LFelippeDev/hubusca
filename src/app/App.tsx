import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './themes/theme';
import { Header } from './components/Header';
import { ProfileDev } from './components/ProfileDev';
import { VisitedDevs } from './components/VisitedDevs';
import { IDevProps } from './interfaces/DevProps';
import { ContentPage, MaxWidthContainer } from './styles/ContentPage';
import { searchDev } from '../api/api';
import { useLastVisitedDevs } from './hooks/useLastVisitedDevs';
import { WithoutInformation } from './styles/WithoutInformation';

export const App = () => {
  const [selectedDev, setSelectedDev] = useState<IDevProps | undefined>();
  const [devOnSearchBar, setDevOpen] = useState<string>('');

  const lastVisitedDevs = useLastVisitedDevs();

  useEffect(() => {
    const formatedDev = searchDev(devOnSearchBar);
    formatedDev.then((value) => {
      if (typeof value === 'string') {
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
          {selectedDev ? (
            <ProfileDev selectedDev={selectedDev} />
          ) : (
            <WithoutInformation infoMessage="Dev não encontrado, busque outro dev!" />
          )}
          {lastVisitedDevs && (
            <VisitedDevs
              lastVisitedDevs={lastVisitedDevs}
              openVisitedDev={setDevOpen}
            />
          )}
        </MaxWidthContainer>
      </ContentPage>
    </ThemeProvider>
  );
};
