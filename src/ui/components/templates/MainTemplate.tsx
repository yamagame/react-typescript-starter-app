import React from 'react';
import 'app/App.css';

export type Props = {
  header?: string;
  children?: React.ReactNode;
};

export function MainTemplate(props: Props) {
  const { header, children } = props;
  return (
    <div className="App">
      {header && <h1>{header}</h1>}
      {children}
    </div>
  );
}
