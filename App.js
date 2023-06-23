
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import ParentData from './ParentData';

import ChildDataa from './ChildDataa';

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ParentData/>}/>
        <Route path='/tab' element={<ChildDataa/>}/>
      </Routes>
      </BrowserRouter>
      </>
  );
}

export default App;
