export const jwtConstants = {
  secret: `${process.env.JWT_SECRET ?? 'velocity'}`,
};

export const REFRESH_TOKEN_AGE = 7 * 24 * 60 * 60 * 1000; // 7 days in milliseconds
