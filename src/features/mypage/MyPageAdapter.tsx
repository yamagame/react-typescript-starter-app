import { MyPage } from 'components/pages/MyPage';
import { useTemplateProps } from 'features/utils';

export function MyPageAdapter() {
  const template = useTemplateProps();
  return <MyPage template={template} />;
}
