import { useAppSelector } from 'app/hooks';
import { useParams } from 'react-router-dom';
import { selectState } from 'features/article/articleSlice';

export function ArticlePage() {
  const { pages } = useAppSelector(selectState);
  const { pageId } = useParams<{ pageId: string }>();
  const page = pages.find((page) => page.id === pageId);

  return (
    <>
      <h1>{page?.title}</h1>
      <p>{page?.content}</p>
    </>
  );
}
