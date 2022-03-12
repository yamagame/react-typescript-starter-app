import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { Button } from 'components/atoms/Button';

export type MyPageProps = {
  count: number;
  template: MainTemplateProps;
  onClickPlus: () => void;
  onClickMinus: () => void;
};

export function MyPage(props: MyPageProps) {
  const { count } = props;
  return (
    <MainTemplate {...props.template} header="MyPage">
      <p>これはマイページです。</p>
      <p>
        <Button label="-" onClick={props.onClickMinus} />
        カウンタ : {count} 個
        <Button label="+" onClick={props.onClickPlus} />
      </p>
    </MainTemplate>
  );
}
