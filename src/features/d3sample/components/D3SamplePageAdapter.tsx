import { useParams } from 'react-router-dom';
import { D3Sample } from 'components/pages/D3SamplePage';
import { useTemplateProps } from 'features/utils';
import {
  useGetD3SampleByNameQuery,
  useUpdateD3SampleMutation,
} from 'features/d3sample/services';
import { D3SampleItem } from 'components/pages/D3SamplePage/types';
import { D3SampleDataToItem, D3SampleItemToData } from '../usecase';

export const D3SamplePageAdapter = () => {
  const { pageName } = useParams<{ pageName: string }>();
  const template = useTemplateProps();
  // データの読み込みフック
  const {
    data = [],
    error,
    isLoading,
  } = useGetD3SampleByNameQuery(pageName || '');
  // データの書き出しフック
  const [updatePost, { isLoading: isUpdating }] = useUpdateD3SampleMutation();
  return (
    <D3Sample
      key="editor"
      template={template}
      name={pageName || ''}
      data={D3SampleDataToItem(data)}
      isLoading={isLoading}
      isUpdating={isUpdating}
      updateData={(data: D3SampleItem[]) => {
        updatePost({ name: pageName || '', data: D3SampleItemToData(data) });
      }}
    />
  );
};
