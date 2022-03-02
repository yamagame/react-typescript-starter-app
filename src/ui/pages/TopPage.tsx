import { Link } from 'react-router-dom';
import { MainTemplate } from 'ui/templates/MainTemplate';

export type Props = {
  pages: {
    id: string;
    title: string;
    content: string;
  }[];
};

export function TopPage(props: Props) {
  const { pages } = props;
  return (
    <MainTemplate>
      <h1>Top</h1>
      <div>
        <Link to={`/counter`}>Counter</Link>
      </div>
      {pages.map((page) => (
        <div key={page.id}>
          <Link to={`/article/${page.id}`}>{page.title}</Link>
        </div>
      ))}
    </MainTemplate>
  );
}
