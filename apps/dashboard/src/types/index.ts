/**
 * Represents an API key.
 * @typedef {Object} ApiKey
 * @property {number} created_at - The Unix epoch timestamp (in seconds) when the API key was created.
 * @property {number} updated_at - The Unix epoch timestamp (in seconds) when the API key was last updated.
 * @property {string} secret - The secret associated with the API key. By default, it is hidden and should be shown to the user on demand.
 * @property {string} user_id - The ID of the user associated with the API key.
 * @property {string} id - The ID of the API key.
 * @property {string} name - The name of the API key.
 */
export type ApiKey = {
  created_at: number;
  updated_at: number;
  secret: string;
  user_id: string;
  id: string;
  name: string;
};
