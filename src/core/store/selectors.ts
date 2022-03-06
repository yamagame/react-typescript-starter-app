import { RootState } from '.';

export const selectors = {
  article: (state: RootState) => state.article,
  counter: (state: RootState) => state.counter,
  formSample: (state: RootState) => state.formSample,
  todo: (state: RootState) => state.todo,
};
