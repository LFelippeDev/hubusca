export const formatDate = (date: string) => {
  const unformattedDate = new Date(date);
  const formatedDate =
    unformattedDate.getDate() +
    '/' +
    (unformattedDate.getMonth() + 1) +
    '/' +
    unformattedDate.getFullYear();

  return formatedDate;
};
