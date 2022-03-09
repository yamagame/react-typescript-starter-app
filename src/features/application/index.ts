import { createSlice } from '@reduxjs/toolkit';
import { config } from 'config';

export interface ApplicationState {
  version: string;
}

const initialState: ApplicationState = {
  version: config.version,
};

export const applicationSlice = createSlice({
  name: 'application',
  initialState,
  reducers: {},
});

export const actions = {
  ...applicationSlice.actions,
};

export default applicationSlice.reducer;
