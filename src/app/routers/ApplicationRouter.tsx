import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterAdapter } from 'ui/adapters/CounterAdapter';
import { TopAdapter } from 'ui/adapters/TopAdapter';
import { ArticleAdapter } from 'ui/adapters/ArticleAdapter';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*-------------- トップページ */}
        <Route path="/" element={<TopAdapter />} />
        {/*-------------- トップページ */}
        <Route path="/counter" element={<CounterAdapter />} />
        {/*-------------- 各ページ */}
        <Route path={'article/:pageId'} element={<ArticleAdapter />} />
      </Routes>
    </BrowserRouter>
  );
}
