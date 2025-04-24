import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Register from './pages/Register';
function App() {


  return (
    <div className="h-screen">
      <Topbar />
      <Sidebar />
      <div className='hidden'>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </div>
  )
}

export default App
