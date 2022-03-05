import React from 'react';
import { useAppDispatch } from 'core/store';
import { fetchPagesAsync } from 'core/gateways/article';
import { AppRouter } from 'routers/ApplicationRouter';

export function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPagesAsync());
  }, [dispatch]);

  return <AppRouter />;
}
