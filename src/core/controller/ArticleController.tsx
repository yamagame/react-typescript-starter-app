import { useParams } from 'react-router-dom';
import { selectState } from 'core/slices/article/articleSlice';
import { useAppSelector } from 'core/store';
import { ArticlePage } from 'ui/pages/ArticlePage';

export function ArticleController() {
  const { pages } = useAppSelector(selectState);
  const { pageId } = useParams<{ pageId: string }>();
  const page = pages.find((page) => page.id === pageId);
  return <ArticlePage page={page} />;
}
