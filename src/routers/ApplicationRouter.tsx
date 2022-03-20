import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CounterAdapter } from 'features/counter/components/CounterAdapter';
import { TopAdapter } from 'features/top/TopAdapter';
import { FormAdapter } from 'features/formSample/components/FormAdapter';
import { FormFormikAdapter } from 'features/formSample/components/FormFormikAdapter';
import { ArticleAdapter } from 'features/article/components/ArticleAdapter';
import { MyPageAdapter } from 'features/mypage/components/MyPageAdapter';
import { TestPageAdapter } from 'features/testpage/components/TestPageAdapter';
import { ToDoAdapter } from 'features/todo/components/ToDoAdapter';
import { ToDoCounterAdapter } from 'features/todoCounter/components/ToDoCounterAdapter';
import { MindmapAdapter } from 'features/mindmap/components/MindmapAdapter';

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
        {/*-------------- テストページ */}
        <Route path={'/test-page'} element={<TestPageAdapter />} />
        {/*-------------- マインドマップページ */}
        <Route path={'/mindmap'} element={<MindmapAdapter />} />
        {/*-------------- ToDOページ */}
        <Route path={'/todo'} element={<ToDoAdapter />} />
        {/*-------------- ToDOページ */}
        <Route path={'/todo-counter'} element={<ToDoCounterAdapter />} />
        {/*-------------- 各ページ */}
        <Route path={'/article/:pageId'} element={<ArticleAdapter />} />
      </Routes>
    </BrowserRouter>
  );
}
