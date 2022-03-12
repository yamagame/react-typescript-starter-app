import { createSlice } from '@reduxjs/toolkit';

export interface TestPageState {
  count: number;
}

const initialState: TestPageState = {
  count: 1,
};

export const testPageSlice = createSlice({
  name: 'testpage',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    double: (state) => {
      state.count *= 2;
    },
    decrement: (state) => {
      if (state.count > 0) state.count -= 1;
    },
  },
});

export const actions = {
  ...testPageSlice.actions,
};

export default testPageSlice.reducer;
