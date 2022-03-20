import { createSlice } from '@reduxjs/toolkit';

export interface MindmapState {
  //
}

const initialState: MindmapState = {
  //
};

export const mindmapSlice = createSlice({
  name: 'mindmap',
  initialState,
  reducers: {},
});

export const actions = {
  ...mindmapSlice.actions,
};

export default mindmapSlice.reducer;
