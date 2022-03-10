export interface IPublicRepository {
  name: string;
  resume?: string;
  language: string;
  lastPush: string;
  createdAt: string;
}

export interface IDevProps {
  id: string;
  name: string;
  login: string;
  image: string;
  location: string;
  followers: number;
  totalPublicRepositories: number;
  publicRepositories: IPublicRepository[];
}
