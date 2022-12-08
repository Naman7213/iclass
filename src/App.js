import './App.css';
import Navbar from './components/Navbar';
import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';
import { Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AdminLogin/> */}
      {/* <Dashboard/> */}
      <Routes>
        <Route path='/' element={<AdminLogin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
