import { MainTemplate } from 'ui/components/templates/MainTemplate';

export type Props = {};

export function MyPage(props: Props) {
  return (
    <MainTemplate header="MyPage">
      <p>これはマイページです。</p>
    </MainTemplate>
  );
}
