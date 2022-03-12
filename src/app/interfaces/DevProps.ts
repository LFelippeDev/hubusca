export interface IDevProps {
  id: string;
  name: string;
  login: string;
  image: string;
  location: string;
  followers: number;
  totalPublicRepositories: number;
  publicRepositories: IDevReposResponseProps[];
}

export interface IDevInfosResponseProps {
  id: string;
  name: string;
  login: string;
  avatar_url: string;
  location: string;
  followers: number;
  public_repos: number;
}

export interface IDevReposResponseProps {
  name: string;
  description?: string;
  language?: string;
  created_at: string;
  pushed_at: string;
}
