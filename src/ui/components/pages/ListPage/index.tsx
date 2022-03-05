import { MainTemplate } from 'ui/components/templates/MainTemplate';
import { LinkTable } from 'ui/components/molecules/LinkTable';

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
};

export function ListPage(props: Props) {
  const { pages, urls } = props;
  return (
    <MainTemplate header="ListPage">
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
