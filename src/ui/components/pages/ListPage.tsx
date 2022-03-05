import { Link } from 'react-router-dom';
import { MainTemplate } from 'ui/components/templates/MainTemplate';
import { Header } from 'ui/components/molecules/Header';
import { Button } from 'ui/components/atoms/Button';

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
    <MainTemplate header="ListPage">
      <Header
        onCreateAccount={() => {}}
        onLogin={function noRefCheck() {}}
        onLogout={function noRefCheck() {}}
      />
      <div>
        <Link to={`/counter`}>Counter</Link>
      </div>
      <div>
        <Link to={'/form'}>Form</Link>
      </div>
      <div>
        <Link to={`/form-formik`}>Form-Formik</Link>
      </div>
      <div>
        <Link to={`/my-page`}>MyPage</Link>
      </div>
      {pages.map((page) => (
        <div key={page.id}>
          <Link to={`/article/${page.id}`}>{page.title}</Link>
        </div>
      ))}
      <Button
        backgroundColor="#ff9f9d"
        label="Button"
        onClick={() => {}}
        size="large"
      />
      <Button label="Button" onClick={() => {}} primary />
    </MainTemplate>
  );
}
