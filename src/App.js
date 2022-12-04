import './App.css';
import Navbar from './components/Navbar';
// import AdminLogin from './components/AdminLogin';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      {/* <AdminLogin/> */}
      <Dashboard/>
    </div>
  );
}

export default App;
