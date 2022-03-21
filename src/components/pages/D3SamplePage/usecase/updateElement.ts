import * as d3 from 'd3';
import { D3SampleItem } from '../types';

export const updateElement = (
  element: HTMLElement,
  mindmapData: D3SampleItem[]
) => {
  const toText = (d: D3SampleItem) => {
    return `${d.name} : ${d.value}`;
  };
  const pElement = d3
    .select(element)
    .selectAll<HTMLParagraphElement, D3SampleItem[]>('p')
    .data(mindmapData);
  pElement.enter().append('p').text(toText).merge(pElement).text(toText);
  pElement.exit().remove();
};
