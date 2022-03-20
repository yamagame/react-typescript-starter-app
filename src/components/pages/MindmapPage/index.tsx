import {
  MainTemplate,
  MainTemplateProps,
} from 'components/templates/MainTemplate';
import { useComponentState } from './componentState';

export type MindmapProps = {
  template: MainTemplateProps;
};

export function Mindmap(props: MindmapProps) {
  const state = useComponentState(props);
  return (
    <MainTemplate {...props.template} header="Mindmap">
      <div>Hello World</div>
    </MainTemplate>
  );
}
