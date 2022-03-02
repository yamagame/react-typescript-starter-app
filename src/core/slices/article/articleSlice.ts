import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../store';
import { Article, fetchPagesAsync } from 'core/gateways/article';

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
      .addCase(fetchPagesAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.pages = action.payload;
      });
  },
});

export const selectState = (state: RootState) => state.article;

export default articleSlice.reducer;
