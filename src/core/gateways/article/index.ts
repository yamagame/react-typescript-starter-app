export type Article = {
  id: string;
  title: string;
  content: string;
};

export const getPagesAsync = async () => {
  return await fetch('/api/pages', { method: 'GET' });
};
