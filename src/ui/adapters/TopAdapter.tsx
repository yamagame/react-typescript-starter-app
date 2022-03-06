import { useAppSelector } from 'core/store';
import { selectors } from 'core/store/selectors';
import { ListPage } from 'ui/components/pages/ListPage';

const urls = [
  { url: `/counter`, title: 'Counter' },
  { url: `/form`, title: 'Form' },
  { url: `/form-formik`, title: 'Form-Formik' },
  { url: `/my-page`, title: 'MyPage' },
  { url: `/todo`, title: 'ToDoPage' },
];

export function TopAdapter() {
  const { pages } = useAppSelector(selectors.article);
  return <ListPage urls={urls} pages={pages} />;
}
