import React from 'react';
import { config } from 'config';

export const useTemplateProps = () => {
  return React.useMemo(() => ({ version: config.version }), []);
};
