export const convertUnixToDate = (unix) => {
  const date = new Date(unix);
  return date.toLocaleString("en-GB").slice(0, -3);
};

export const convertDateToUnix = (date) => {
  date = new Date(date);
  return Math.floor(date.getTime() / 1000);
};
