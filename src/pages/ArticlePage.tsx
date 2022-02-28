import { useParams } from 'react-router-dom';
import { Article } from 'features/article/Article';
import { PageTemplate } from 'templates/PageTemplate';

export function ArticlePage() {
  const { pageId } = useParams<{ pageId: string }>();

  return (
    <PageTemplate>
      <Article pageId={pageId} />
    </PageTemplate>
  );
}
