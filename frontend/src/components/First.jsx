import React from 'react'
import Card from '../visualComponents/card'
import './First.css'; 
import TimeRangeSlider from '../visualComponents/Slider';
import Dropdown from '../visualComponents/DropDown';
import Heading from './Heading';

export default function First() {
  return (
    <div className='first'>
        <Card className='card' title='Sales' value='18.6 M' />
        <Card className='card'title='Total MRP' value='1.2M' />
        <TimeRangeSlider />
        <Dropdown />
        <Heading />
    </div>
  )
}
