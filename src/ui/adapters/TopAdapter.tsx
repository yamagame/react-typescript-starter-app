import { useAppSelector } from 'core/store';
import { selectState } from 'core/slices/article';
import { ListPage } from 'ui/components/pages/ListPage';

const urls = [
  { url: `/counter`, title: 'Counter' },
  { url: `/form`, title: 'Form' },
  { url: `/form-formik`, title: 'Form-Formik' },
  { url: `/my-page`, title: 'MyPage' },
];

export function TopAdapter() {
  const { pages } = useAppSelector(selectState);
  return <ListPage urls={urls} pages={pages} />;
}
