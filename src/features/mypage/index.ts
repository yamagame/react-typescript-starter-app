import { createSlice } from '@reduxjs/toolkit';

export interface MyPageState {
  count: number;
}

const initialState: MyPageState = {
  count: 0,
};

export const mayPageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {},
});

export const actions = {
  ...mayPageSlice.actions,
};

export default mayPageSlice.reducer;
