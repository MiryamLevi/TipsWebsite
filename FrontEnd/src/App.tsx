import './App.css';
import TopTab from './Components/TopTab';
import Home from './Components/Home';
import Buttom from './Buttom';
import { BrowserRouter, Route, Routes  } from 'react-router-dom';
import Category from './Components/Category';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/category' element={<Category/>} />
      </Routes>
      </BrowserRouter>
      <br></br>
  <Buttom />
    </div>
  );
}


export default App;
