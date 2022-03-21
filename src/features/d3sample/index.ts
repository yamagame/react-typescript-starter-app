import { createSlice } from '@reduxjs/toolkit';

export interface D3SampleState {
  //
}

const initialState: D3SampleState = {
  //
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
