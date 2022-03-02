import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterController } from 'core/controller/CounterController';
import { TopController } from 'core/controller/TopController';
import { ArticleController } from 'core/controller/ArticleController';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*-------------- トップページ */}
        <Route path="/" element={<TopController />} />
        {/*-------------- トップページ */}
        <Route path="/counter" element={<CounterController />} />
        {/*-------------- 各ページ */}
        <Route path={'article/:pageId'} element={<ArticleController />} />
      </Routes>
    </BrowserRouter>
  );
}
