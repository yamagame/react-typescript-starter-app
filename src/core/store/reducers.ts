import counterReducer from '../slices/counter';
import articleReducer from '../slices/article';
import formSampleReducer from '../slices/formSample';
import todoReducer from '../slices/todo';

export const reducer = {
  counter: counterReducer,
  article: articleReducer,
  formSample: formSampleReducer,
  todo: todoReducer,
};
