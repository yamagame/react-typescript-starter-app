import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterAdapter } from 'ui/adapters/CounterAdapter';
import { TopAdapter } from 'ui/adapters/TopAdapter';
import { FormAdapter } from 'ui/adapters/FormAdapter';
import { FormFormikAdapter } from 'ui/adapters/FormFormikAdapter';
import { ArticleAdapter } from 'ui/adapters/ArticleAdapter';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*-------------- トップページ */}
        <Route path="/" element={<TopAdapter />} />
        {/*-------------- カウンターページ */}
        <Route path="/counter" element={<CounterAdapter />} />
        {/*-------------- フォームページ */}
        <Route path={'form'} element={<FormAdapter />} />
        {/*-------------- フォーミックフォームページ */}
        <Route path={'form-formik'} element={<FormFormikAdapter />} />
        {/*-------------- 各ページ */}
        <Route path={'article/:pageId'} element={<ArticleAdapter />} />
      </Routes>
    </BrowserRouter>
  );
}
