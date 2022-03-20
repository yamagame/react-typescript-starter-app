import { Mindmap } from 'components/pages/MindmapPage';
import { useTemplateProps } from 'features/utils';
import { useAppSelector, useAppDispatch } from 'store';
import { mindmapSelector } from '../selector';
import { actions } from 'features/mindmap';

export function MindmapAdapter() {
  const dispatch = useAppDispatch();
  const template = useTemplateProps();
  return <Mindmap template={template} />;
}
