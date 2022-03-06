import {
  createSlice,
  createAsyncThunk,
  SerializedError,
} from '@reduxjs/toolkit';
import {
  ToDo as ToDoModel,
  getTodoAsync,
  postTodoAsync,
  patchToDoAsync,
} from 'core/gateways/todo';

export interface ToDoApiResponse {
  data: ToDo;
  status: string;
}

export type ToDo = ToDoModel;

export interface ToDoState {
  status: string;
  todos: ToDo[];
  error?: SerializedError;
}

const initialState: ToDoState = {
  status: 'idle',
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // -----------------------------------------------
      .addCase(fetchToDoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchToDoAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos = action.payload.data;
      })
      .addCase(fetchToDoAsync.rejected, (state) => {
        state.status = 'error';
      })
      // -----------------------------------------------
      .addCase(createToDoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createToDoAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        state.todos = [...state.todos, action.payload.data];
      })
      .addCase(createToDoAsync.rejected, (state) => {
        state.status = 'error';
      })
      // -----------------------------------------------
      .addCase(updateToDoAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateToDoAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        const todo = state.todos.find((v) => v.id === action.payload.data.id);
        if (todo) {
          Object.assign(todo, action.payload.data);
        }
      })
      .addCase(updateToDoAsync.rejected, (state) => {
        state.status = 'error';
      });
  },
});

const fetchToDoAsync = createAsyncThunk(
  'todo/fetchToDoAsync',
  async (_, thunkAPI) => {
    const res = await getTodoAsync({});
    if (res.status !== 200) return thunkAPI.rejectWithValue(res);
    return res;
  }
);

const createToDoAsync = createAsyncThunk(
  'todo/createToDoAsync',
  async (todo: string, thunkAPI) => {
    const res = await postTodoAsync({ todo });
    if (res.status !== 200) return thunkAPI.rejectWithValue(res);
    return res;
  }
);

const updateToDoAsync = createAsyncThunk(
  'todo/updateToDoAsync',
  async (todo: ToDo, thunkAPI) => {
    const res = await patchToDoAsync({ todo });
    if (res.status !== 200) return thunkAPI.rejectWithValue(res);
    return res;
  }
);

export const actions = {
  ...todoSlice.actions,
  fetchToDoAsync,
  createToDoAsync,
  updateToDoAsync,
};

export default todoSlice.reducer;
