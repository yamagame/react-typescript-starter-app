import { createSlice } from '@reduxjs/toolkit';

export interface D3SampleState {
  data: number[];
}

const initialState: D3SampleState = {
  data: [4, 8, 15, 16, 23, 42],
};

export const d3sampleSlice = createSlice({
  name: 'd3sample',
  initialState,
  reducers: {},
});

export const actions = {
  ...d3sampleSlice.actions,
};

export default d3sampleSlice.reducer;
