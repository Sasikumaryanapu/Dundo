import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import Display from './Components/Display';
import Cart from './Components/Cart';

function App() {
  return (
    <div className="App">
    
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/cart' element={<Cart/>}/>


       </Routes>
    </div>
  );
}

export default App;
