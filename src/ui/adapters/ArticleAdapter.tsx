import { useParams } from 'react-router-dom';
import { useAppSelector } from 'core/store';
import { selectState } from 'core/slices/article';
import { ArticlePage } from 'ui/components/pages/ArticlePage';

export function ArticleAdapter() {
  const { pages } = useAppSelector(selectState);
  const { pageId } = useParams<{ pageId: string }>();
  const page = pages.find((page) => page.id === pageId);
  return <ArticlePage page={page} />;
}
