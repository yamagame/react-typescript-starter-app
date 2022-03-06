import { useParams } from 'react-router-dom';
import { useAppSelector } from 'core/store';
import { selectors } from 'core/store/selectors';
import { ArticlePage } from 'ui/components/pages/ArticlePage';

export function ArticleAdapter() {
  const { pages } = useAppSelector(selectors.article);
  const { pageId } = useParams<{ pageId: string }>();
  const page = pages.find((page) => page.id === pageId);
  return <ArticlePage page={page} />;
}
