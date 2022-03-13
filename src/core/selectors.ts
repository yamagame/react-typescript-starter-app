import { applicationSelector } from 'features/application/selector';
import { articleSelector } from 'features/article/selector';
import { counterSelector } from 'features/counter/selector';
import { formSampleSelector } from 'features/formSample/selector';
import { todoSelector } from 'features/todo/selector';
import { todoCounterSelector } from 'features/todoCounter/selector';

// ----------------------------------------------- selectors
export const selectors = {
  application: applicationSelector,
  article: articleSelector,
  counter: counterSelector,
  formSample: formSampleSelector,
  todo: todoSelector,
  todoCounter: todoCounterSelector,
};
