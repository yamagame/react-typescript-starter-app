import { useAppSelector } from 'app/hooks';
import { selectState } from 'features/article/articleSlice';

type Props = {
  children?: React.ReactNode;
  pageId?: string;
};

export function Article(props: Props) {
  const { pageId } = props;
  const { pages } = useAppSelector(selectState);
  const page = pages.find((page) => page.id === pageId);

  return (
    <>
      <h1>{page?.title}</h1>
      <p>{page?.content}</p>
    </>
  );
}
