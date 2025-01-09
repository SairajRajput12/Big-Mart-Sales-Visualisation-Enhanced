import React, { useContext } from 'react'
import './Second.css'; 
// import AreaChart from '../visualComponents/AreaChart';
import BarChart from '../visualComponents/Bar';
import PieChart from '../visualComponents/Pie';
import AreaC from '../visualComponents/AreaChart';
import { DatasetContext } from '../Context/DatasetContext';


export default function Second() {
  const {excelData} = useContext(DatasetContext); 
  const outletTypes = Object.keys(excelData.outlet_type_per_sales); 
  const outletSales = Object.values(excelData.outlet_type_per_sales); 
  console.log(outletTypes); 
  console.log(outletSales); 


  return (
    <div className='second' >
        <BarChart />
        <PieChart outletTypes={outletTypes} outletSales={outletSales} title='Sales By Each Stores' />
        <AreaC />
    </div>
  )
}
