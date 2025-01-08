import React, { useContext } from 'react'; 
import './BlackBoard.css'; 
import Button from '../UI/Button';
import SideBoard from '../UI/SideBoard';
import { useNavigate } from 'react-router-dom';
import { DatasetContext } from '../Context/DatasetContext';


export default function BlackBoard() {
  const navigate = useNavigate(); 
  const { uploadStatus } = useContext(DatasetContext);  

  return (
    <SideBoard>
        <h1>Hello Learner</h1>
        <Button onClick={() => navigate('/')} className='user-button'>Add Dataset</Button>
        {uploadStatus && <Button onClick={() => navigate('/show')} className='user-button'>Show Dashboard</Button>}
        {uploadStatus && <Button onClick={() => navigate('/chat')} className='user-button'>Get Insight From Our Bot</Button>}
    </SideBoard>
  )
}
