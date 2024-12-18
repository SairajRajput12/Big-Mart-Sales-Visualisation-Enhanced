import React from 'react'; 
import './BlackBoard.css'; 
import Button from '../UI/Button';


export default function BlackBoard() {
  return (
    <div className='black-board'>
        <h1>Hello Learner !</h1>
        <Button className='user-button' >Add Dataset</Button>
        <Button className='user-button'>Show Dashboard</Button>
    </div>
  )
}
