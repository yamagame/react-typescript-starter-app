import counterReducer from '../slices/counter/counterSlice';
import articleReducer from '../slices/article/articleSlice';

export const reducer = {
  counter: counterReducer,
  article: articleReducer,
};
