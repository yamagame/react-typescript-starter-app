import { D3SampleItem, D3SampleGraphType } from '../types';
import { textGraph } from './graph/textGraph';
import { horizontalBarGraph } from './graph/horizontalBarGraph';
import { verticalBarGraph } from './graph/verticalBarGraph';

const graph = {
  [D3SampleGraphType.TEXT]: textGraph,
  [D3SampleGraphType.VERTICAL_BAR]: verticalBarGraph,
  [D3SampleGraphType.HORIZONTAL_BAR]: horizontalBarGraph,
};

export const updateElement = (
  element: HTMLElement,
  mindmapData: D3SampleItem[],
  graphType: D3SampleGraphType
) => {
  graph[graphType](element, mindmapData);
};
