import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { Button } from 'components/atoms/Button';

export type ToDoCounterPageProps = {
  todo: string;
  count: number;
  onClickMinus: () => void;
  onClickPlus: () => void;
  template: MainTemplateProps;
};

export function ToDoCounterPage(props: ToDoCounterPageProps) {
  const { todo, count } = props;
  return (
    <MainTemplate {...props.template} header="ToDoCounter">
      <p>
        <Button label="-" onClick={props.onClickMinus} />
        {count}
        <Button label="+" onClick={props.onClickPlus} />
      </p>
      <p>{todo}</p>
    </MainTemplate>
  );
}
