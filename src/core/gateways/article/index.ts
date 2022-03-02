import { createAsyncThunk } from '@reduxjs/toolkit';

export type Article = {
  id: string;
  title: string;
  content: string;
};

export const fetchPagesAsync = createAsyncThunk(
  'article/fetchAllPages',
  async () => {
    const response = await fetch('/pages', { method: 'POST' });
    return response.json();
  }
);
