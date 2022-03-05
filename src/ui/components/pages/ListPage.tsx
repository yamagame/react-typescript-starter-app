import { Link } from 'react-router-dom';
import { MainTemplate } from 'ui/components/templates/MainTemplate';

export type Props = {
  pages: {
    id: string;
    title: string;
    content: string;
  }[];
};

export function ListPage(props: Props) {
  const { pages } = props;
  return (
    <MainTemplate header="Top">
      <div>
        <Link to={`/counter`}>Counter</Link>
      </div>
      <div>
        <Link to={`/form`}>Form</Link>
      </div>
      <div>
        <Link to={`/form-formik`}>Form-Formik</Link>
      </div>
      {pages.map((page) => (
        <div key={page.id}>
          <Link to={`/article/${page.id}`}>{page.title}</Link>
        </div>
      ))}
    </MainTemplate>
  );
}
