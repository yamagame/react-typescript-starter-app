import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Article, getPagesAsync } from 'core/gateways/article';

export interface ArticleState {
  status: string;
  pages: Article[];
}

const initialState: ArticleState = {
  status: 'idle',
  pages: [],
};

export const articleSlice = createSlice({
  name: 'article',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPagesAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchPagesAsync.rejected, (state, action) => {
        console.error(action.error);
        state.status = 'error';
      })
      .addCase(fetchPagesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pages = action.payload;
      });
  },
});

const fetchPagesAsync = createAsyncThunk(
  'article/fetchPagesAsync',
  async () => {
    const response = await getPagesAsync();
    return response.json();
  }
);

export const actions = {
  ...articleSlice.actions,
  fetchPagesAsync,
};

export default articleSlice.reducer;
