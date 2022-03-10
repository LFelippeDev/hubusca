import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${(props) => props.theme.colors.primary};
  height: 4.8rem;

  border-bottom-right-radius: 0.5rem;
  border-bottom-left-radius: 0.5rem;
  box-shadow: 0 0.25rem 0.65rem 0 rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  padding: 0 0.75rem;
`;

export const HeaderLogo = styled.img`
  height: 55%;
  margin: 0 1.75rem;
`;

export const HeaderSearchBar = styled.form`
  height: 55%;
  width: 20.25rem;
  border-radius: 0.5rem;
  padding: 0 0.5rem;
  display: flex;
  background: ${(props) => props.theme.colors.searchBarBackground};

  input {
    background: transparent;
    width: 90%;
    height: 100%;
    border: 0;

    :focus {
      border: 0;
      outline: 0;
    }

    ::placeholder {
      font-size: 0.875rem;
      font-weight: 600;
    }
  }

  button {
    background: transparent;
    border: 0;
    display: flex;
    align-items: center;

    :hover {
      opacity: 0.7;
      cursor: pointer;
    }
  }
`;
