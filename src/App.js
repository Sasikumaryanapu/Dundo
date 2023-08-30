import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/home/Home';
import Display from './Components/Display';
import Cart from './Components/Cart';


import {useSelector,useDispatch} from 'react-redux'
import {addUser} from './slicer'

function App() {
  const data=useSelector((state)=>state.value)

  console.log(data)
const dispatch=useDispatch()
const Handle=()=>{
  dispatch(addUser({email:"ds"}))
}
  return (
    <div className="App">
      <button onClick={Handle}>cahnge</button>
      <h2>Start editing to see some magic happen!</h2>
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/display' element={<Display/>}/>
        <Route path='/cart' element={<Cart/>}/>
       </Routes>
    </div>
  );
}

export default App;
