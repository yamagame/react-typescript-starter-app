import React from 'react';
import 'App.css';

type Props = {
  children?: React.ReactNode;
};

export function PageTemplate(props: Props) {
  const { children } = props;
  return <div className="App">{children}</div>;
}
