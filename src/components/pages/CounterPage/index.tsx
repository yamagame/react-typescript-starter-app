import { Counter } from 'components/organisms/Counter';
import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { CounterLinks } from 'components/organisms/CounterLinks';
import { AppLinkCardProps } from 'components/molecules/AppLinkCard';
import logo from './logo.svg';
import { Props as CounterProps } from 'components/organisms/Counter';

export type Props = CounterProps & {
  cards: AppLinkCardProps[];
  template: MainTemplateProps;
};

export function CounterPage(props: Props) {
  const { count, actions, cards } = props;
  return (
    <MainTemplate {...props.template}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count={count} actions={actions} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <CounterLinks cards={cards} />
      </header>
    </MainTemplate>
  );
}
