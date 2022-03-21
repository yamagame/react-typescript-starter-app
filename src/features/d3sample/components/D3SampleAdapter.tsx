import { useParams } from 'react-router-dom';
import { D3Sample } from 'components/pages/D3SamplePage';
import { useTemplateProps } from 'features/utils';
import {
  useGetD3SampleByNameQuery,
  useUpdateD3SampleMutation,
} from 'features/d3sample/services';
import { D3SampleItem } from 'components/pages/D3SamplePage/types';

export function D3SampleAdapter() {
  const template = useTemplateProps();
  const { pageName } = useParams<{ pageName: string }>();
  const {
    data = [],
    error,
    isLoading,
  } = useGetD3SampleByNameQuery(pageName || '');
  const [
    updatePost, //
    { isLoading: isUpdating },
  ] = useUpdateD3SampleMutation();
  return (
    <D3Sample
      key="editor"
      template={template}
      data={data}
      isLoading={isLoading || isUpdating}
      updateData={(data: D3SampleItem[]) => {
        updatePost({ name: pageName || '', data });
      }}
    />
  );
}
