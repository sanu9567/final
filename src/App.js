// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Navbar from './Components/Navbar'
import Home from './Components/Home';
import Menu from './Components/Menu';
import Address from './Components/Address';
import Order from './Components/Order';
import Custom from './Components/Custom';
import FeedbackBox from './Components/FeedbackBox';








function App() {
  return (
    <div className="App">
   
    

      <Routes>
        {/* <Route path='/' element={<><Navbar/></>}/>
        <Route path='/' element={<><Home/></>}/> */}
        <Route path='/' element={<><Login/></>}/>
        <Route path='/sign' element={<><Signup/></>}/>
        <Route path='/home' element={<><Navbar/><Home/></>}/> 
        <Route path='/Menu' element={<Menu/>}/>
        <Route path='/address' element={<Address/>}/>
        <Route path='/order' element={<Order/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/custom' element={<Custom/>}/>
        <Route path='/feedbackbox' element={<FeedbackBox/>}/>
        <Route path='/hom' element={<Home/>}/>
      </Routes> 

   
    </div>
  );
}

export default App;
