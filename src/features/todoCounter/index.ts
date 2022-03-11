import { createSlice } from '@reduxjs/toolkit';

export interface ToDoCounterState {
  count: number;
}

const initialState: ToDoCounterState = {
  count: 0,
};

export const toDoCounterSlice = createSlice({
  name: 'todo-counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      if (state.count > 0) state.count -= 1;
    },
  },
});

export const actions = {
  ...toDoCounterSlice.actions,
};

export default toDoCounterSlice.reducer;
