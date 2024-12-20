import React from 'react'
import './Second.css'; 
// import AreaChart from '../visualComponents/AreaChart';
import BarChart from '../visualComponents/Bar';
import PieChart from '../visualComponents/Pie';
import AreaC from '../visualComponents/AreaChart';


export default function Second() {
  return (
    <div className='second' >
        <BarChart />
        <PieChart />
        <AreaC />
    </div>
  )
}
