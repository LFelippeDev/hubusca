import { IDevCardProps } from '../components/DevCard';

export const useLastVisitedDevs = () => {
  const visitedDevs = localStorage.getItem('VisitedDevs');
  let lastVisitedDevs: IDevCardProps[] = [];

  if (visitedDevs) lastVisitedDevs = JSON.parse(visitedDevs);

  return lastVisitedDevs;
};
