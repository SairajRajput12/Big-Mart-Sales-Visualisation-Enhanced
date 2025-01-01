import React from 'react'; 
import './BlackBoard.css'; 
import Button from '../UI/Button';
import SideBoard from '../UI/SideBoard';
import { useNavigate } from 'react-router-dom';


export default function BlackBoard() {
  const navigate = useNavigate(); 


  return (
    <SideBoard>
        <h1>Hello Learner !</h1>
        <Button onClick={() => navigate('/')} className='user-button'>Add Dataset</Button>
        <Button onClick={() => navigate('/show')} className='user-button'>Show Dashboard</Button>
        <Button onClick={() => navigate('/chat')} className='user-button'>Get Insight From Our Bot</Button>
    </SideBoard>
  )
}
