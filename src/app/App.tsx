import React from 'react';
import { useAppDispatch } from 'core/store';
import { actions } from 'core/slices/article';
import { AppRouter } from 'routers/ApplicationRouter';

export function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(actions.fetchPagesAsync());
  }, [dispatch]);

  return <AppRouter />;
}
