import axios, { AxiosResponse } from 'axios';
import {
  IDevInfosResponseProps,
  IDevProps,
  IDevReposResponseProps,
} from '../app/interfaces/DevProps';
import { SetVisitedDevs } from './SetVisitedDevs';

const baseURL = 'https://api.github.com/users/';

export const searchDev = async (
  devLogin?: string
): Promise<IDevProps | string | undefined> => {
  try {
    let loginSelectedDev = localStorage.getItem('Dev');
    if (!devLogin) {
      if (!loginSelectedDev) return 'Procure um dev';

      loginSelectedDev = JSON.parse(loginSelectedDev);
    }

    const devInfos: AxiosResponse<IDevInfosResponseProps> = await axios.get(
      baseURL + (devLogin ? devLogin : loginSelectedDev)
    );

    if (!devInfos) return 'Esse Dev nao existe';

    if (devLogin) {
      localStorage.setItem('Dev', JSON.stringify(devLogin));
    }

    const devRepos: AxiosResponse<IDevReposResponseProps[]> = await axios.get(
      baseURL + (devLogin ? devLogin : loginSelectedDev) + '/repos'
    );
    const { id, name, avatar_url, followers, login, location, public_repos } =
      devInfos.data;

    SetVisitedDevs({ image: avatar_url, location, login, name });

    return {
      id: id,
      name: name,
      image: avatar_url,
      followers: followers,
      login: login,
      location: location,
      totalPublicRepositories: public_repos,
      publicRepositories: devRepos.data,
    };
  } catch (err) {}
};
