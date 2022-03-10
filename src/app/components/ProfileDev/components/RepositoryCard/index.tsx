import { IPublicRepository } from '../../../../interfaces/DevProps';
import {
  RepositoryCardName,
  RepositoryCardContainer,
  RepositoryCardFooter,
  RepositoryCardInfos,
  RepositoryCardInfosLabel,
} from './styles';

interface IRepositoryCardProps {
  repositoryItem: IPublicRepository;
}

export const RepositoryCard = ({ repositoryItem }: IRepositoryCardProps) => {
  const { createdAt, language, lastPush, name, resume } = repositoryItem;
  return (
    <RepositoryCardContainer>
      <RepositoryCardName>{name}</RepositoryCardName>
      <RepositoryCardInfos>
        <RepositoryCardInfosLabel>Linguagem:</RepositoryCardInfosLabel>
        {language}
      </RepositoryCardInfos>
      <RepositoryCardFooter>
        <RepositoryCardInfos>
          <RepositoryCardInfosLabel>Criação:</RepositoryCardInfosLabel>
          {createdAt}
        </RepositoryCardInfos>
        <RepositoryCardInfos>
          <RepositoryCardInfosLabel>Último push:</RepositoryCardInfosLabel>
          {lastPush}
        </RepositoryCardInfos>
      </RepositoryCardFooter>
    </RepositoryCardContainer>
  );
};
