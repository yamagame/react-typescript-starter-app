import { Counter } from 'ui/organisms/Counter';
import { MainTemplate } from 'ui/templates/MainTemplate';
import logo from './logo.svg';
import { Props as CounterProps } from 'ui/organisms/Counter';

export type Props = CounterProps;

export function CounterPage(props: Props) {
  const { count, actions } = props;
  return (
    <MainTemplate>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count={count} actions={actions} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header>
    </MainTemplate>
  );
}
