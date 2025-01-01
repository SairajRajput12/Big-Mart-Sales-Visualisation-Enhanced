import './App.css'
import BlackBoard from './components/BlackBoard'
import Dashboard from './components/Dashboard'
import { HashRouter, Route, Routes } from 'react-router-dom'
import UploadDataset from './components/UploadDataset'
import ChatBot from './components/ChatBot'

function App() {

  return (
    <>
    <div className='user-ui'>
    <HashRouter>
    <BlackBoard />
        <Routes>
            <Route path='/' element={<UploadDataset />} />
            <Route path='/chat' element={<ChatBot />} />
            <Route path='/show' element={<Dashboard />} />
        </Routes>
    </HashRouter>
    </div>
    </>
  )
}

export default App;
