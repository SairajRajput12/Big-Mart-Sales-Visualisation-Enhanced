import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

export default function Bar() {
  const chartRef = useRef(null);

  useEffect(() => {
    const data = [65, 59, 80, 81, 56];
    const labels = ['January', 'February', 'March', 'April', 'May'];

    // Clear previous SVG if it exists
    d3.select(chartRef.current).select('svg').remove();

    const svg = d3
      .select(chartRef.current)
      .append('svg')
      .attr('width', 500)
      .attr('height', 300)
      .style('background-color', 'rgba(245, 245, 245, 0.306)')
      .style('border','1px solid white')
      .style('border-radius','12px')
      .style('margin-left','12px'); 

    const margin = { top: 20, right: 30, bottom: 30, left: 40 };
    const width = 500 - margin.left - margin.right;
    const height = 300 - margin.top - margin.bottom;

    const x = d3
      .scaleBand()
      .domain(labels)
      .range([0, width])
      .padding(0.1);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data)])
      .nice()
      .range([height, 0]);

    const chart = svg
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);

    chart
      .append('g')
      .selectAll('rect')
      .data(data)
      .join('rect')
      .attr('x', (d, i) => x(labels[i]))
      .attr('y', d => y(d))
      .attr('height', d => height - y(d))
      .attr('width', x.bandwidth())
      .attr('fill', 'steelblue');

    chart.append('g').call(d3.axisLeft(y));

    chart
      .append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(x));
  }, []);

  return (
    <div>
      <div className='bar-chart' ref={chartRef}></div>
    </div>
  );
}
