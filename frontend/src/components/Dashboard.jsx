import React from 'react'
import First from './First'
import Second from './Second'
import Third from './Third'
import Heading from './Heading'
import Dropdown from '../visualComponents/DropDown'

export default function Dashboard() {
  return (
    <>
        <div className='main-content'>
            <First />
            <Second />
            <Third />
        </div>
    </>
  )
}
