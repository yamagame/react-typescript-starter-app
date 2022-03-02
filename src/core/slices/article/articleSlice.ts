import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';

export interface Article {
  status: string;
  pages: {
    id: string;
    title: string;
    content: string;
  }[];
}

const initialState: Article = {
  status: 'idle',
  pages: [],
};

export const fetchPageAsync = createAsyncThunk(
  'article/fetchPages',
  async () => {
    const response = await fetch('/pages', { method: 'POST' });
    return response.json();
  }
);

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPageAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPageAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pages = action.payload;
      });
  },
});

export const selectState = (state: RootState) => state.article;

export default articleSlice.reducer;
