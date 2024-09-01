
// App.js (or any other parent component)

import React from 'react';
// import Navbar from './components/Navbar';
import Home from './screens/Home';
import Login from './screens/Login';
import Signup from './screens/Signup';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screens/MyOrder';
// import { CartProvider } from './components/ContextReducer';
// import './App.css';

const App = () => {
  return (
    <CartProvider>
    <Router>
    <div>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/createuser" element={<Signup/>}/>
        <Route exact path="/myOrder" element={<MyOrder/>}/>
        {/* <Route exact path="/creatuser" element={<Signup/>}/> */}
      </Routes>
      {/* <Navbar /> */}
      {/* Other components or content */}
    </div>
    </Router>
    </CartProvider>
  );
};

export default App;
