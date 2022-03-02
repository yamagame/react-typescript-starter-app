import { selectState } from 'core/slices/article/articleSlice';
import { useAppSelector } from 'core/store';
import { TopPage } from 'ui/pages/TopPage';

export function TopController() {
  const { pages } = useAppSelector(selectState);
  return <TopPage pages={pages} />;
}
