import { createCipheriv, randomBytes, randomUUID } from 'crypto';

export const generateUniqueId = (
  length: number = 32,
  prefix: string = '',
): string => {
  return `${prefix}${randomBytes(length).toString('hex')}`;
};
