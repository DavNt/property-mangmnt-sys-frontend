import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Routes, Route} from 'react-router-dom';
import Login from './components/login';
import Dashboard from './components/dashboard';

function App() {
  return (
    <>
    {/* <Login/> */}
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="dashboard" element={<Dashboard/>}/>
    </Routes>
    </>
  );
}

export default App;
