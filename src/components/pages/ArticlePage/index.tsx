import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';

export type Props = {
  page?: {
    title?: string;
    content?: string;
  };
  template: MainTemplateProps;
};

export function ArticlePage(props: Props) {
  const { page } = props;

  return (
    <MainTemplate {...props.template} header="Ariticle">
      <h1>{page?.title}</h1>
      <p>{page?.content}</p>
    </MainTemplate>
  );
}
