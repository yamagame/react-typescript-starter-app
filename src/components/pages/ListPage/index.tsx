import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { LinkTable } from 'components/molecules/LinkTable';

export type Props = {
  urls: {
    url: string;
    title: string;
  }[];
  pages: {
    id: string;
    title: string;
    content: string;
  }[];
  template: MainTemplateProps;
};

export function ListPage(props: Props) {
  const { pages, urls } = props;
  return (
    <MainTemplate {...props.template} header="ListPage">
      <LinkTable urls={urls} />
      <LinkTable
        urls={pages.map((page) => ({
          url: `/article/${page.id}`,
          title: page.title,
        }))}
      />
    </MainTemplate>
  );
}
