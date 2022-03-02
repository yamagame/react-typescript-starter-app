import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterController } from 'ui/controllers/CounterController';
import { TopController } from 'ui/controllers/TopController';
import { ArticleController } from 'ui/controllers/ArticleController';

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
