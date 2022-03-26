import { Link } from 'react-router-dom';
import { useTemplateProps } from 'features/utils';
import { MainTemplate } from 'components/templates/MainTemplate';

export function D3SampleLinkAdapter() {
  const template = useTemplateProps();
  return (
    <MainTemplate {...template} header="D3Sample">
      <Link to="/d3sample/main">main</Link>
    </MainTemplate>
  );
}
