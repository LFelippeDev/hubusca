import { IDevProps } from '../../interfaces/DevProps';
import { LocationIcon } from '../../styles/LocationIcon';
import { RepositoryCard } from './components/RepositoryCard';
import {
  ProfileDevContainer,
  ProfileDevNameOrId,
  ProfileDevBoxInfos,
  ProfileDevRepositoryList,
  ProfileDevImage,
  ProfileDevInfos,
  ProfileDevNumberInfos,
  ProfileDevStatusInfos,
} from './styles';

interface IProfileDevProps {
  selectedDev: IDevProps;
}

export const ProfileDev = ({ selectedDev }: IProfileDevProps) => {
  const {
    followers,
    id,
    image,
    location,
    login,
    name,
    publicRepositories,
    totalPublicRepositories,
  } = selectedDev;

  return (
    <ProfileDevContainer>
      <ProfileDevBoxInfos>
        <ProfileDevImage src={image} alt="Foto do Dev" />
        <ProfileDevNameOrId isId>{id}</ProfileDevNameOrId>
        <ProfileDevNameOrId>{name}</ProfileDevNameOrId>
        <ProfileDevInfos>{login}</ProfileDevInfos>
        <ProfileDevInfos>
          <LocationIcon />
          {location}
        </ProfileDevInfos>
        <ProfileDevStatusInfos>
          <ProfileDevInfos isBold>
            <ProfileDevNumberInfos>{followers}</ProfileDevNumberInfos>{' '}
            Seguidor(es)
          </ProfileDevInfos>
          <ProfileDevInfos isBold>
            <ProfileDevNumberInfos>
              {totalPublicRepositories}
            </ProfileDevNumberInfos>
            Repositório(s) Público(s)
          </ProfileDevInfos>
        </ProfileDevStatusInfos>
      </ProfileDevBoxInfos>
      <ProfileDevRepositoryList>
        {publicRepositories.map((repository, index) => (
          <RepositoryCard key={index} repositoryItem={repository} />
        ))}
      </ProfileDevRepositoryList>
    </ProfileDevContainer>
  );
};
