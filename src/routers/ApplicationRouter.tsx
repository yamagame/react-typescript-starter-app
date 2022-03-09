import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterAdapter } from 'features/counter/CounterAdapter';
import { TopAdapter } from 'features/top/TopAdapter';
import { FormAdapter } from 'features/formSample/FormAdapter';
import { FormFormikAdapter } from 'features/formSample/FormFormikAdapter';
import { ArticleAdapter } from 'features/article/ArticleAdapter';
import { MyPageAdapter } from 'features/mypage/MyPageAdapter';
import { ToDoAdapter } from 'features/todo/ToDoAdapter';

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        {/*-------------- トップページ */}
        <Route path="/" element={<TopAdapter />} />
        {/*-------------- カウンターページ */}
        <Route path="/counter" element={<CounterAdapter />} />
        {/*-------------- フォームページ */}
        <Route path={'/form'} element={<FormAdapter />} />
        {/*-------------- フォーミックフォームページ */}
        <Route path={'/form-formik'} element={<FormFormikAdapter />} />
        {/*-------------- マイページ */}
        <Route path={'/my-page'} element={<MyPageAdapter />} />
        {/*-------------- ToDOページ */}
        <Route path={'/todo'} element={<ToDoAdapter />} />
        {/*-------------- 各ページ */}
        <Route path={'/article/:pageId'} element={<ArticleAdapter />} />
      </Routes>
    </BrowserRouter>
  );
}
