import counterReducer from 'core/slices/counter';
import articleReducer from 'core/slices/article';
import formSampleReducer from 'core/slices/formSample';
import todoReducer from 'core/slices/todo';

export const reducer = {
  counter: counterReducer,
  article: articleReducer,
  formSample: formSampleReducer,
  todo: todoReducer,
};
