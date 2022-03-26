import * as d3 from 'd3';
import { D3SampleItem, D3SampleGraphType } from '../types';
import { textGraph } from './graph/normalTextGraph';
import { text2Graph } from './graph/redTextGraph';
import { horizontalBarGraph } from './graph/horizontalBarGraph';
import { verticalBarGraph } from './graph/verticalBarGraph';

const graph = {
  [D3SampleGraphType.NORMAL_TEXT]: textGraph,
  [D3SampleGraphType.RED_TEXT]: text2Graph,
  [D3SampleGraphType.VERTICAL_BAR]: verticalBarGraph,
  [D3SampleGraphType.HORIZONTAL_BAR]: horizontalBarGraph,
};

export const updateElement = (
  element: HTMLElement,
  mindmapData: D3SampleItem[],
  graphType: D3SampleGraphType
) => {
  // 前回表示コンポーネントの削除
  d3.select(element).selectAll('*').remove();
  graph[graphType](element, mindmapData);
};
