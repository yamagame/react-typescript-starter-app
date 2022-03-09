import React from 'react';
import { useAppDispatch } from 'store';
import { actions } from 'features/article';
import { AppRouter } from 'routers/ApplicationRouter';

export function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(actions.fetchPagesAsync());
  }, [dispatch]);

  return <AppRouter />;
}
