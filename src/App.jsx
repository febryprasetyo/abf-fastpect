// import './App.css';
import { Route, Routes } from 'react-router-dom';
import Ciamis from './page/Ciamis';
import Sidrap from './page/Sidrap';
import Monitoring from './page/Monitoring';

function App() {
  return (
    <div className='bg-blue-800 min-h-screen pb-4'>
      <Routes>
        <Route path='/' element={<Monitoring />} />
        <Route path='/ciamis' element={<Ciamis />} />
        <Route path='/sidrap' element={<Sidrap />} />
      </Routes>
    </div>
  );
}

export default App;
