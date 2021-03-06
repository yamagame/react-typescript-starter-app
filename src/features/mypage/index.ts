import { createSlice } from '@reduxjs/toolkit';

export interface MyPageState {
  count: number;
}

const initialState: MyPageState = {
  count: 0,
};

export const myPageSlice = createSlice({
  name: 'mypage',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const actions = {
  ...myPageSlice.actions,
};

export default myPageSlice.reducer;
