import React from 'react';
import './index.css';

export type MainTemplateProps = {
  header?: string;
  version?: string;
  children?: React.ReactNode;
};

export function MainTemplate(props: MainTemplateProps) {
  const { header, version, children } = props;
  return (
    <div className="App">
      {header && <h1>{header}</h1>}
      {version && <p>{version}</p>}
      {children}
    </div>
  );
}
