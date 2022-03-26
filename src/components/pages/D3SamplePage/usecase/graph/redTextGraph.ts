import * as d3 from 'd3';
import { D3SampleItem } from '../../types';

export const text2Graph = (element: HTMLElement, dataset: D3SampleItem[]) => {
  const toText = (d: D3SampleItem) => {
    return `${d.name} : ${d.value}`;
  };

  // データセットに対して
  const pElement = d3.select(element).selectAll('p').data(dataset);

  // 追加された要素に対して操作
  pElement.enter().append('p').style('color', 'red').text(toText);

  // 削除された要素に対して操作
  pElement.exit().remove();
};
