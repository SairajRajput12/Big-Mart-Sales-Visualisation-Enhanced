import React from 'react'
import ApexCharts from 'react-apexcharts';
import './DonutChart.css'; 

export default function DonutChart() {      
      const options = {
        chart: {
          type: 'donut',
        },
        labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
        legend: {
          position: 'bottom', 
        },
      };
    
      const series = [44, 55, 13, 33]; 
    
    
  return (
    <div className='donut-chart'>
        <ApexCharts options={options} series={series} type='donut'  />
    </div>
  )
}
