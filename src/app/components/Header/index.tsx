import { HeaderContainer, HeaderLogo, HeaderSearchBar } from './styles';
import logo from '../../assets/logo.svg';
import { FormEvent, useCallback, useState } from 'react';
import searchButton from './assets/searchButton.svg';

interface IHeaderProps {
  searchDevs: React.Dispatch<React.SetStateAction<string>>;
}

export const Header = ({ searchDevs }: IHeaderProps) => {
  const [devOnSearchBar, setDevOnSearchBar] = useState<string>('');

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      searchDevs(devOnSearchBar);
    },
    [devOnSearchBar, searchDevs]
  );

  return (
    <HeaderContainer>
      <HeaderLogo src={logo} alt="Logo HUBusca" />
      <HeaderSearchBar onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Pesquise um Dev aqui!"
          onChange={(event) => setDevOnSearchBar(event.target.value)}
        />
        <button type="submit">
          <img src={searchButton} alt="Botão de Busca" />
        </button>
      </HeaderSearchBar>
    </HeaderContainer>
  );
};
