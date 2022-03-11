import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

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

// ----------------------------------------------- reducers
import applicatoinReducer from 'features/application';
import counterReducer from 'features/counter';
import articleReducer from 'features/article';
import formSampleReducer from 'features/formSample';
import todoReducer from 'features/todo';
import mayPageSlice from 'features/mypage';
import todoCounterReducer from 'features/todoCounter';

export const store = configureStore({
  reducer: {
    application: applicatoinReducer,
    counter: counterReducer,
    article: articleReducer,
    formSample: formSampleReducer,
    todo: todoReducer,
    mayPage: mayPageSlice,
    todoCounter: todoCounterReducer,
  },
});

// ----------------------------------------------- selectors
import { applicationSelector } from 'features/application/selector';
import { articleSelector } from 'features/article/selector';
import { counterSelector } from 'features/counter/selector';
import { formSampleSelector } from 'features/formSample/selector';
import { todoSelector } from 'features/todo/selector';
import { todoCounterSelector } from 'features/todoCounter/selector';

export const selectors = {
  application: applicationSelector,
  article: articleSelector,
  counter: counterSelector,
  formSample: formSampleSelector,
  todo: todoSelector,
  todoCounter: todoCounterSelector,
};
