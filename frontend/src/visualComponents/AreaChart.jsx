import { autoType } from 'd3';
import React from 'react';
import ApexCharts from 'react-apexcharts';
import './Area.css'; 


const AreaChart = () => {
  // Define the data for the chart
  const series = [
    {
      name: 'My Dataset',
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ];

  // Define the options for the chart
  const options = {
    chart: {
      type: 'area',
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: 'smooth',
    },
    title: {
      text: 'Area Chart Example',
      align: 'left',
    },
    xaxis: {
      categories: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    },
    fill: {
      type: 'gradient',
      gradient: {
        shade: 'light',
        type: 'vertical',
        shadeIntensity: 0.5,
        gradientToColors: ['rgb(41, 54, 197)'],
        inverseColors: false,
        opacityFrom: 0.7,
        opacityTo: 0.9,
        stops: [0, 90, 100],
      },
    },
    tooltip: {
      x: {
        format: 'dd/MM/yy HH:mm',
      },
    },
  };

  return (
    <div className='area-chart'>
      <ApexCharts options={options} series={series} type="area" width="100%" height="100%"  />
    </div>
  );
};

export default AreaChart;
