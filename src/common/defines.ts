export const API_URI = (): string => {
  return process.env.NODE_ENV === 'development'
    ? 'http://localhost:4000/graphql'
    : 'http://seung-ju.com:4000/graphql';
};

export const PLATFORM_TYPE = {
  MOBILE: 'MOBILE',
  PC: 'PC',
};
