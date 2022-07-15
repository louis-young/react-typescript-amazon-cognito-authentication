export const buildEntireUrl = (endpoint: string) => {
  return `${process.env.REACT_APP_API_BASE_URL}${endpoint}`;
};
