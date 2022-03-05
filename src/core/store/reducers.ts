import counterReducer from '../slices/counter';
import articleReducer from '../slices/article';
import formSampleReducer from '../slices/formSample';

export const reducer = {
  counter: counterReducer,
  article: articleReducer,
  formSample: formSampleReducer,
};
