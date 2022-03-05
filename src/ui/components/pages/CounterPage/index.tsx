import { Counter } from 'ui/components/organisms/Counter';
import { MainTemplate } from 'ui/components/templates/MainTemplate';
import { CounterLinks } from 'ui/components/organisms/CounterLinks';
import { AppLinkCardProps } from 'ui/components/molecules/AppLinkCard';
import logo from './logo.svg';
import { Props as CounterProps } from 'ui/components/organisms/Counter';

export type Props = CounterProps & {
  cards: AppLinkCardProps[];
};

export function CounterPage(props: Props) {
  const { count, actions, cards } = props;
  return (
    <MainTemplate>
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
