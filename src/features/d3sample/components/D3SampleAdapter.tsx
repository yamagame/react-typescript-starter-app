import { useParams } from 'react-router-dom';
import { D3Sample } from 'components/pages/D3SamplePage';
import { Link } from 'react-router-dom';
import { useTemplateProps } from 'features/utils';
import {
  useGetD3SampleByNameQuery,
  useUpdateD3SampleMutation,
} from 'features/d3sample/services';
import { D3SampleItem } from 'components/pages/D3SamplePage/types';
import { MainTemplate } from 'components/templates/MainTemplate';

const D3SampleEditorPage = ({ pageName }: { pageName: string }) => {
  const template = useTemplateProps();
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
      name={pageName || ''}
      data={data}
      isLoading={isLoading}
      isUpdating={isUpdating}
      updateData={(data: D3SampleItem[]) => {
        updatePost({ name: pageName || '', data });
      }}
    />
  );
};

export function D3SampleAdapter() {
  const template = useTemplateProps();
  const { pageName } = useParams<{ pageName: string }>();
  if (pageName) {
    return <D3SampleEditorPage pageName={pageName} />;
  }
  return (
    <MainTemplate {...template} header="D3Sample">
      <Link to="/d3sample/main">main</Link>
    </MainTemplate>
  );
}
