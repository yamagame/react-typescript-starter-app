import * as d3 from 'd3';
import { D3SampleItem } from '../../types';

export const horizontalBarGraph = (
  element: HTMLElement,
  dataset: D3SampleItem[]
) => {
  const width = 500;
  const height = 300;
  const padding = 50;

  // X軸方向のスケール
  const xScale = d3
    .scaleLinear()
    .domain([0, 20])
    .range([padding, width - padding]);

  // Y軸方向のスケール
  const yScale = d3
    .scaleBand()
    .rangeRound([padding, height - padding])
    .padding(0.1)
    .domain(
      dataset.map(function (d) {
        return d.name;
      })
    );

  // SVGの準備
  const svg = d3
    .select(element)
    .append('svg')
    .attr('width', 500)
    .attr('height', 300);

  // バーの表示
  svg
    .append('g')
    .selectAll('rect')
    .data(dataset)
    .enter()
    .append('rect')
    .attr('x', (d) => padding)
    .attr('y', (d) => yScale(d.name) || '')
    .attr('width', function (d) {
      return xScale(d.value) - padding;
    })
    .attr('height', yScale.bandwidth())
    .attr('fill', 'skyblue');

  // 表示エリアの準備
  const g = svg.append('g');

  // バーの削除
  g.selectAll('rect').data(dataset).exit().remove();

  // X軸の表示
  g.append('g')
    .attr('transform', 'translate(' + 0 + ',' + (height - padding) + ')')
    .call(d3.axisBottom(xScale));

  // Y軸の表示
  g.append('g')
    .attr('transform', 'translate(' + padding + ',' + 0 + ')')
    .call(d3.axisLeft(yScale));
};
