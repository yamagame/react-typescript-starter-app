import { MainTemplate } from 'ui/components/templates/MainTemplate';

export type Props = {
  page?: {
    title?: string;
    content?: string;
  };
};

export function ArticlePage(props: Props) {
  const { page } = props;

  return (
    <MainTemplate header="Ariticle">
      <h1>{page?.title}</h1>
      <p>{page?.content}</p>
    </MainTemplate>
  );
}
