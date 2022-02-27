import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useAppDispatch } from 'app/hooks';
import { fetchPageAsync } from 'features/article/articleSlice';
import { CounterPage } from 'pages/CounterPage';
import { TopPage } from 'pages/TopPage';
import { ArticlePage } from 'pages/ArticlePage';

export function App() {
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    dispatch(fetchPageAsync());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <Routes>
        {/*-------------- トップページ */}
        <Route path="/" element={<TopPage />} />
        {/*-------------- トップページ */}
        <Route path="/counter" element={<CounterPage />} />
        {/*-------------- 各ページ */}
        <Route path={'article/:pageId'} element={<ArticlePage />} />
      </Routes>
    </BrowserRouter>
  );
}
