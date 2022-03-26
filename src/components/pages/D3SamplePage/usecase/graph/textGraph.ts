import * as d3 from 'd3';
import { D3SampleItem } from '../../types';

export const textGraph = (
  element: HTMLElement,
  mindmapData: D3SampleItem[]
) => {
  // 前回表示コンポーネントの削除
  d3.select(element).selectAll('*').remove();

  const toText = (d: D3SampleItem) => {
    return `${d.name} : ${d.value}`;
  };

  const pElement = d3
    .select(element)
    .selectAll<HTMLParagraphElement, D3SampleItem[]>('p')
    .data(mindmapData);

  pElement.enter().append('p').text(toText);
  pElement.exit().remove();
};
