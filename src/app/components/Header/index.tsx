import { HeaderContainer, HeaderLogo, HeaderSearchBar } from './styles';
import logo from '../../assets/logo.svg';
import { useCallback, useState } from 'react';
import searchButton from './assets/searchButton.svg';
import { MaxWidthContainer } from '../../styles/ContentPage';

export const Header = () => {
  const [devOnSearchBar, setDevOnSearchBar] = useState<string>('');

  const searchDevs = useCallback(() => {}, []);

  return (
    <HeaderContainer>
      <MaxWidthContainer>
        <HeaderLogo src={logo} alt="Logo HUBusca" />
        <HeaderSearchBar onSubmit={searchDevs}>
          <input
            type="text"
            placeholder="Pesquise um Dev aqui!"
            onChange={(event) => setDevOnSearchBar(event.target.value)}
          />
          <button type="submit">
            <img src={searchButton} alt="Botão de Busca" />
          </button>
        </HeaderSearchBar>
      </MaxWidthContainer>
    </HeaderContainer>
  );
};
