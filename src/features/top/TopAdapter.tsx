import { useAppSelector } from 'store';
import { articleSelector } from 'features/article/selector';
import { ListPage } from 'components/pages/ListPage';
import { useTemplateProps } from 'features/utils';

const urls = [
  { url: `/counter`, title: 'Counter' },
  { url: `/form`, title: 'Form' },
  { url: `/form-formik`, title: 'Form-Formik' },
  { url: `/my-page`, title: 'MyPage' },
  { url: `/test-page`, title: 'TestPage' },
  { url: `/todo`, title: 'ToDoPage' },
  { url: `/todo-counter`, title: 'ToDoCounter' },
];

export function TopAdapter() {
  const template = useTemplateProps();
  const { pages } = useAppSelector(articleSelector);
  return <ListPage urls={urls} pages={pages} template={template} />;
}
