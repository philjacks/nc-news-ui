export const convertDate = (unix) => {
  const date = new Date(unix);

  return date.toLocaleString("en-GB").slice(0, -3);
};
