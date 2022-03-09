import { useParams } from 'react-router-dom';
import { useAppSelector, selectors } from 'store';
import { ArticlePage } from 'components/pages/ArticlePage';
import { useTemplateProps } from 'features/utils';

export function ArticleAdapter() {
  const template = useTemplateProps();
  const { pages } = useAppSelector(selectors.article);
  const { pageId } = useParams<{ pageId: string }>();
  const page = pages.find((page) => page.id === pageId);
  return <ArticlePage page={page} template={template} />;
}
