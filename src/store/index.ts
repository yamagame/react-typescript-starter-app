import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import applicatoinReducer from 'features/application';
import counterReducer from 'features/counter';
import articleReducer from 'features/article';
import formSampleReducer from 'features/formSample';
import todoReducer from 'features/todo';

export const store = configureStore({
  reducer: {
    application: applicatoinReducer,
    counter: counterReducer,
    article: articleReducer,
    formSample: formSampleReducer,
    todo: todoReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const selectors = {
  application: (state: RootState) => state.application,
  article: (state: RootState) => state.article,
  counter: (state: RootState) => state.counter,
  formSample: (state: RootState) => state.formSample,
  todo: (state: RootState) => state.todo,
};
