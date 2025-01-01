import React from 'react'
import DonutChart from '../visualComponents/DonutChart'
import './Third.css'; 
import HorizontalChart from '../visualComponents/HorizontalBar';
import PieChart from '../visualComponents/Pie';


export default function Third() {

  return (
    <div className='third'>
      <DonutChart />
      <HorizontalChart />
      <PieChart />
    </div>
  )
}
