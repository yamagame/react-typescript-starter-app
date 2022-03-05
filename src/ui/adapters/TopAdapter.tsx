import { useAppSelector } from 'core/store';
import { selectState } from 'core/slices/article';
import { ListPage } from 'ui/components/pages/ListPage';

export function TopAdapter() {
  const { pages } = useAppSelector(selectState);
  return <ListPage pages={pages} />;
}
