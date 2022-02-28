import { Link } from 'react-router-dom';
import { selectState } from 'features/article/articleSlice';
import { useAppSelector } from 'app/hooks';

export function TopOrganism() {
  const { pages } = useAppSelector(selectState);
  return (
    <>
      <div>
        <Link to={`/counter`}>Counter</Link>
      </div>
      {pages.map((page) => (
        <div key={page.id}>
          <Link to={`/article/${page.id}`}>{page.title}</Link>
        </div>
      ))}
    </>
  );
}
