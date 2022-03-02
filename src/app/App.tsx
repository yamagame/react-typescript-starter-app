import React from 'react';
import { useAppDispatch } from 'core/store';
import { fetchPageAsync } from 'core/slices/article/articleSlice';
import { AppRouter } from 'app/routers/ApplicationRouter';

export function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPageAsync());
  }, [dispatch]);

  return <AppRouter />;
}
