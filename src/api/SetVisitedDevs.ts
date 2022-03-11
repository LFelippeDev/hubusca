import { IDevCardProps } from '../app/components/DevCard';
import { useLastVisitedDevs } from '../app/hooks/useLastVisitedDevs';

export const SetVisitedDevs = (lastVisitedDev: IDevCardProps) => {
  let lastVisitedDevs = useLastVisitedDevs() || [];

  const devIsAlreadyInArray = lastVisitedDevs.find(
    (dev) => dev.login === lastVisitedDev.login
  );

  if (!devIsAlreadyInArray) lastVisitedDevs.unshift(lastVisitedDev);

  if (lastVisitedDevs.length === 11) lastVisitedDevs.pop();

  localStorage.setItem('VisitedDevs', JSON.stringify(lastVisitedDevs));
};
