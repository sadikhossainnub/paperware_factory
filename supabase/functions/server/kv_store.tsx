// Minimal KV store placeholder
// Not used - all functionality is client-side

export const set = async (key: string, value: any) => {
  return true;
};

export const get = async (key: string) => {
  return null;
};

export const del = async (key: string) => {
  return true;
};

export const getByPrefix = async (prefix: string) => {
  return [];
};
