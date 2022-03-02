import React from 'react';
import 'app/App.css';

export type Props = {
  children?: React.ReactNode;
};

export function MainTemplate(props: Props) {
  const { children } = props;
  return <div className="App">{children}</div>;
}
