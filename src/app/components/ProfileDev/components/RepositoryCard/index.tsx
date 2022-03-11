import { IDevReposResponseProps } from '../../../../interfaces/DevProps';
import {
  RepositoryCardName,
  RepositoryCardContainer,
  RepositoryCardFooter,
  RepositoryCardInfos,
  RepositoryCardInfosLabel,
} from './styles';

interface IRepositoryCardProps {
  repositoryItem: IDevReposResponseProps;
}

export const RepositoryCard = ({ repositoryItem }: IRepositoryCardProps) => {
  const { update_at, language, created_at, name, description } = repositoryItem;
  return (
    <RepositoryCardContainer>
      <RepositoryCardName>{name}</RepositoryCardName>
      <RepositoryCardInfos>
        <RepositoryCardInfos>{description}</RepositoryCardInfos>
        <RepositoryCardInfosLabel>Linguagem:</RepositoryCardInfosLabel>
        {language}
      </RepositoryCardInfos>
      <RepositoryCardFooter>
        <RepositoryCardInfos>
          <RepositoryCardInfosLabel>Criação:</RepositoryCardInfosLabel>
          {created_at}
        </RepositoryCardInfos>
        <RepositoryCardInfos>
          <RepositoryCardInfosLabel>Último push:</RepositoryCardInfosLabel>
          {update_at}
        </RepositoryCardInfos>
      </RepositoryCardFooter>
    </RepositoryCardContainer>
  );
};
