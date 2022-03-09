import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';

export type Props = {
  template: MainTemplateProps;
};

export function MyPage(props: Props) {
  return (
    <MainTemplate {...props.template} header="MyPage">
      <p>これはマイページです。</p>
    </MainTemplate>
  );
}
