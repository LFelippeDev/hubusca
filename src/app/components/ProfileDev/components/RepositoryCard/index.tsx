import { formatDate } from '../../../../helpers/formatDate';
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
  const { pushed_at, language, created_at, name, description } = repositoryItem;
  const createRepositoryDate = formatDate(created_at);
  const lastPushDate = formatDate(pushed_at);

  return (
    <RepositoryCardContainer>
      <RepositoryCardName>{name}</RepositoryCardName>
      {description && (
        <RepositoryCardInfos>
          <RepositoryCardInfos>{description}</RepositoryCardInfos>
        </RepositoryCardInfos>
      )}
      {language && (
        <RepositoryCardInfos>
          <RepositoryCardInfosLabel>Linguagem:</RepositoryCardInfosLabel>
          {language}
        </RepositoryCardInfos>
      )}
      <RepositoryCardFooter>
        <RepositoryCardInfos>
          <RepositoryCardInfosLabel>Criação:</RepositoryCardInfosLabel>
          {createRepositoryDate}
        </RepositoryCardInfos>
        <RepositoryCardInfos>
          <RepositoryCardInfosLabel>Último push:</RepositoryCardInfosLabel>
          {lastPushDate}
        </RepositoryCardInfos>
      </RepositoryCardFooter>
    </RepositoryCardContainer>
  );
};
